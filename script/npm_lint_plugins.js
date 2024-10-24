#!/usr/bin/env node
/* eslint-disable no-var */
/* eslint-disable no-console */

var fs = require('fs');

const { spawn, execSync } = require('child_process');
const path = require('path');

var { packageJsonDirsObject } = require('./plugin_webpack_directories');

var dirs = packageJsonDirsObject();
var dirsKeys = Object.keys(dirs);
var passedArgs = process.argv.slice(2);

function pluginDefinesLint(pluginPath) {
  var packageData = JSON.parse(fs.readFileSync(`${pluginPath}/package.json`));

  return packageData.scripts && packageData.scripts.lint;
}
if (passedArgs[0] && passedArgs[0][0] !== '-') {
  // if the argument is --debug and not a plugin name npm test:plugins katello --debug
  dirsKeys = dirsKeys.filter(dir => dir.endsWith(passedArgs[0]));
  passedArgs.shift();
}
try {
  const scriptPath = path.join(__dirname, 'lint', 'link-eslint-plugin.js');
  execSync(`node ${scriptPath}`, { stdio: 'inherit' });
} catch (error) {
  console.error(`Error: ${error.message}`);
}
dirsKeys.forEach(dirsKey => {
  const pluginPath = dirs[dirsKey];
  const pluginLintScript = pluginDefinesLint(pluginPath);
  if (pluginLintScript?.includes('tfm-lint')) {
    const eslintConfigPath = path.join(
      __dirname,
      'lint',
      '/lint_generic_config.js'
    );
    const eslint = spawn(
      'npx',
      ['eslint', path.join(pluginPath, 'webpack'), '-c', eslintConfigPath],
      {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit',
      }
    );
    eslint.on('error', error => {
      console.error(`Error: ${error.message}`);
    });

    eslint.on('close', code => {
      if (code !== 0) {
        console.error(`ESLint process exited with code ${code}`);
      }
    });
  } else if (pluginLintScript.length) {
    // Dont run foreman config lint for plugins with custom lint
    spawn('npm', ['run', 'lint'], {
      env: process.env,
      cwd: pluginPath,
      stdio: 'inherit',
    });
  }
});
