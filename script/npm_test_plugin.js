#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
/* eslint-disable no-var */

/* This script is used to run tests for all plugins that have a `lint` script defined in their package.json
  To run tests for an individual plugin, pass the plugin name as the first argument to the script
  For example, to run tests for the `foreman-tasks` plugin, run: `npm run test-plugin  foreman-tasks`
  To pass arguments to jest, pass them after the plugin name like so: `npm run test-plugin foreman-tasks -- --debug`
*/

var fs = require('fs');
var path = require('path');
var lodash = require('lodash');
var childProcess = require('child_process');
var { packageJsonDirs } = require('./plugin_webpack_directories');

const passedArgs = process.argv.slice(2);
const coreConfigPath = path.resolve(__dirname, '../webpack/jest.config.js');
const coreConfig = require(coreConfigPath);

function runChildProcess(args, pluginPath) {
  return new Promise((resolve, reject) => {
    const child = childProcess.spawn('npx', args, {
      shell: true,
    });
    // this is needed to make sure the output is not cut
    let stdoutBuffer = '';
    child.stdout.on('data', data => {
      stdoutBuffer += data.toString();
      const lines = stdoutBuffer.split('\n');
      stdoutBuffer = lines.pop();
    });

    let stderrBuffer = `${pluginPath}: \n`;
    child.stderr.on('data', data => {
      stderrBuffer += data.toString();
      const lines = stderrBuffer.split('\n');
      stderrBuffer = lines.pop();
      lines.forEach(line => console.error(line));
    });
    child.on('close', code => {
      if (stdoutBuffer) console.log(stdoutBuffer);
      if (stderrBuffer) console.error(stderrBuffer);
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
}
const runTests = async () => {
  function pluginDefinesLint(pluginPath) {
    var packageHasNodeModules = fs.existsSync(`${pluginPath}/node_modules`); // skip gems
    var packageData = JSON.parse(fs.readFileSync(`${pluginPath}/package.json`));

    return (
      packageHasNodeModules && packageData.scripts && packageData.scripts.lint
    );
  }
  var dirs = packageJsonDirs();
  if (passedArgs[0] && passedArgs[0][0] !== '-') {
    dirs = dirs.filter(dir => dir.endsWith(passedArgs[0]));
    passedArgs.shift();
  }
  for (const pluginPath of dirs) {
    if (pluginDefinesLint(pluginPath)) {
      const testSetupFiles = [
        path.resolve(__dirname, '../webpack/global_test_setup.js'),
      ];
      const testSetupPath = path.join(pluginPath, 'webpack', 'test_setup.js');
      if (fs.existsSync(testSetupPath)) {
        testSetupFiles.unshift(testSetupPath);
      }
      const pluginConfigPath = path.join(pluginPath, 'jest.config.js');
      const combinedConfigPath = path.join(
        pluginPath,
        'combined.jest.config.js'
      );

      if (fs.existsSync(pluginConfigPath)) {
        // eslint-disable-next-line global-require
        const pluginConfig = require(pluginConfigPath);
        function customizer(objValue, srcValue) {
          if (lodash.isArray(objValue)) {
            return lodash.uniq(objValue.concat(srcValue));
          }
        }

        const combinedConfig = lodash.mergeWith(
          pluginConfig,
          {
            ...coreConfig,
            setupFilesAfterEnv: [
              path.resolve(__dirname, '../webpack/global_test_setup.js'),
            ],
          },
          customizer
        );
        combinedConfig.snapshotSerializers = coreConfig.snapshotSerializers;
        fs.writeFileSync(
          combinedConfigPath,
          `module.exports = ${JSON.stringify(combinedConfig, null, 2)};`,
          'utf8'
        );
      }
      const pluginConfigOverride = fs.existsSync(pluginConfigPath);
      const configPath = pluginConfigOverride
        ? combinedConfigPath
        : coreConfigPath;
      const corePath = path.resolve(__dirname, '../');
      const args = [
        'jest',
        `${pluginPath}/webpack`,
        '--roots',
        pluginPath,
        corePath,
        `--config=${configPath}`,
        pluginConfigOverride
          ? ''
          : `--setupFilesAfterEnv ${testSetupFiles.join(' ')}`,
        '--color',
        ...passedArgs,
      ];

      await runChildProcess(args, pluginPath); // Run every plugin test in a separate process
    }
  }
};

runTests();
