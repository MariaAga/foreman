/* eslint-disable no-var*/
'use strict';

var path = require('path');
var webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();
var ForemanVendorPlugin = require('@theforeman/vendor')
  .WebpackForemanVendorPlugin;
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var vendorEntry = require('./webpack.vendor');
var fs = require('fs');
const { ModuleFederationPlugin } = require('webpack').container;
var pluginUtils = require('../script/plugin_webpack_directories');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

function getForemanFilePaths(isPlugin) {
  const paths = [
    path.join(
      process.cwd(),
      './webpack/assets/javascripts/react_app/components/HostDetails/Templates'
    ),
  ];
  const acc = [];
  paths.forEach(path => {
    acc.push(...getForemanFilePath(isPlugin, path));
  });
  return acc;
}
function getForemanFilePath(isPlugin, directory) {
  const files = fs.readdirSync(directory);
  const filePaths = files.reduce((acc, file) => {
    const filePath = path.join(directory, file);
    const isFile = fs.statSync(filePath).isFile();
    if (isFile) {
      if (file.endsWith('.js') && !file.includes('test')) {
        if (isPlugin) {
          acc.push(
            path.join('../../foreman', filePath.replace(process.cwd(), ''))
          );
        } else {
          acc.push(path.join('./', filePath.replace(process.cwd(), '')));
        }
      }
    } else {
      const subDirectoryFiles = getForemanFilePathsRecursive(
        filePath,
        isPlugin
      );
      acc.push(...subDirectoryFiles);
    }
    return acc;
  }, []);

  return filePaths;
}

function getForemanFilePathsRecursive(directory, isPlugin) {
  const files = fs.readdirSync(directory);

  const filePaths = files.reduce((acc, file) => {
    const filePath = path.join(directory, file);
    const isFile = fs.statSync(filePath).isFile();
    if (isFile) {
      if (file.endsWith('.js') && !file.includes('test')) {
        if (isPlugin) {
          acc.push(
            path.join('../../foreman', filePath.replace(process.cwd(), ''))
          );
        } else {
          acc.push(path.join('./', filePath.replace(process.cwd(), '')));
        }
      }
    } else {
      const subDirectoryFiles = getForemanFilePathsRecursive(
        filePath,
        isPlugin
      );
      acc.push(...subDirectoryFiles);
    }
    return acc;
  }, []);

  return filePaths;
}
class AddRuntimeRequirement {
  apply(compiler) {
    compiler.hooks.compilation.tap('AddRuntimeRequirement', compilation => {
      const { RuntimeGlobals } = compiler.webpack;
      compilation.hooks.additionalModuleRuntimeRequirements.tap(
        'AddRuntimeRequirement',
        (module, set) => {
          set.add(RuntimeGlobals.loadScript);
        }
      );
    });
  }
}

const supportedLocales = () => {
  const localeDir = path.join(__dirname, '..', 'locale');

  // Find all files in ./locale/*
  const localesFiles = fs.readdirSync(localeDir);

  // Return only folders
  return localesFiles.filter(f =>
    fs.statSync(path.join(localeDir, f)).isDirectory()
  );
};

const supportedLanguages = () => {
  // Extract extract languages from the language tags (strip off dialects)
  return [...new Set(supportedLocales().map(d => d.split('_')[0]))];
};

const supportedLanguagesRE = new RegExp(
  `/(${supportedLanguages().join('|')})$`
);

var bundleEntry = path.join(
  __dirname,
  '..',
  'webpack/assets/javascripts/bundle.js'
);
const commonConfig = function(env, argv) {
  var production =
    process.env.RAILS_ENV === 'production' ||
    process.env.NODE_ENV === 'production';
  const mode = production ? 'production' : 'development';
  const config = {};
  if (production) {
    config.devtool = 'source-map';
    config.optimization = {
      moduleIds: 'named',
      splitChunks: false,
    };
  } else {
    config.optimization = {
      splitChunks: false,
    };
    config.devtool = 'inline-source-map';
  }
  return {
    ...config,
    mode,

    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify'),
      },
      alias: {
        foremanReact: path.join(
          __dirname,
          '../webpack/assets/javascripts/react_app'
        ),
        '@theforeman/vendor': path.join(
          __dirname,
          '..',
          '..',
          'foreman',
          'node_modules',
          '@theforeman',
          'vendor'
        ),
      },
    },
    resolveLoader: {
      modules: [path.resolve(__dirname, '..', 'node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          /* Include novnc, unidiff in webpack, transpiling is needed for phantomjs (which does not support ES6) to run tests
          unidiff can be removed once https://github.com/mvoss9000/unidiff/pull/1 is merged */
          exclude: /node_modules(?!\/(@novnc|unidiff))/,
          loader: 'babel-loader',
          options: {
            presets: [require.resolve('@theforeman/builder/babel')],
          },
        },
        {
          test: /\.(png|gif|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 32767,
            },
          },
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
    plugins: [
      new ForemanVendorPlugin({
        mode,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(mode),
          NOTIFICATIONS_POLLING: process.env.NOTIFICATIONS_POLLING,
          REDUX_LOGGER: process.env.REDUX_LOGGER,
        },
      }),
      // limit locales from intl only to supported ones
      new webpack.ContextReplacementPlugin(
        /intl\/locale-data\/jsonp/,
        supportedLanguagesRE
      ),
      // limit locales from react-intl only to supported ones
      new webpack.ContextReplacementPlugin(
        /react-intl\/locale-data/,
        supportedLanguagesRE
      ),
      new AddRuntimeRequirement(),
      // new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    infrastructureLogging: {
      colors: true,
      level: 'verbose',
    },
    stats: {
      logging: 'verbose',
      preset: 'verbose',
    },
  };
};

const moduleFederationSharedConfig = function(env, argv) {
  return {
    react: { singleton: true },
    'react-dom': { singleton: true },
    '@theforeman/vendor': { singleton: true },
    '@theforeman/vendor-dev': { singleton: true },
    '@theforeman/vendor-scss': { singleton: true },
    '@theforeman/vendor-scss-variables': { singleton: true },
    '@babel/core': { singleton: true },
    webpack: { singleton: true },
    'bundle.js': { singleton: true },
    'path-browserify': { singleton: true },
    'os-browserify': { singleton: true },
  };
};

const coreConfig = function(env, argv) {
  var config = commonConfig(env, argv);

  var manifestFilename = 'manifest.json';
  config.context = path.resolve(__dirname, '..');
  config.entry = {
    bundle: { import: bundleEntry, dependOn: 'vendor' },
    vendor: vendorEntry,
  };
  config.output = {
    path: path.join(__dirname, '..', 'public', 'webpack'),
    publicPath: '/webpack/',
  };
  var plugins = config.plugins;
  console.log(
    'path core',
    path.resolve(
      __dirname,
      '..',
      'webpack',
      'assets',
      'javascripts',
      'react_app',
      'components'
    )
  );

  const webpackDirectory = path.resolve(
    __dirname,
    '..',
    'webpack',
    'assets',
    'javascripts',
    'react_app'
  );
  const coreShared = {};

  getForemanFilePaths(false).forEach(file => {
    const key = file.replace(webpackDirectory, '').replace(/\.(js|jsx)$/, '');
    coreShared['./' + file] = {
      singleton: true,
      eager: true,
      shareKey: key,
    };
  });
  plugins.push(
    new ModuleFederationPlugin({
      name: 'foremanReact',
      shared: {
        ...moduleFederationSharedConfig(env, argv),

        ...coreShared,
      },
    })
  );
  plugins.push(
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  );
  plugins.push(
    new StatsWriterPlugin({
      filename: manifestFilename,
      fields: null,
      transform: function(data, opts) {
        return JSON.stringify(
          {
            assetsByChunkName: data.assetsByChunkName,
            errors: data.errors,
            warnings: data.warnings,
          },
          null,
          2
        );
      },
    })
  );

  plugins.push(
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      analyzerMode: 'static',
      openAnalyzer: false,
      statsFilename: 'stats.json',
    })
  );
  config.plugins = plugins;
  var rules = config.module.rules;
  rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: path.join(__dirname, '..', 'public', 'webpack'),
        },
      },
      'css-loader',
      'sass-loader',
    ],
  });
  config.module.rules = rules;
  return config;
};

const pluginConfig = function(env, argv) {
  var pluginEnv = env.plugin;
  const pluginRoot = pluginEnv.root;
  const pluginName = pluginEnv.name.replace('-', '_'); // module federation doesnt like -

  console.log('pluginEntries', pluginEnv.entries);

  var config = commonConfig(env, argv);
  console.log('pluginEnv', pluginEnv);
  console.log('pluginEnv root', pluginRoot);
  config.context = path.join(pluginRoot, 'webpack');
  config.entry = {};
  var pluginEntries = {
    './index': path.resolve(pluginRoot, 'webpack', 'index'),
  };
  pluginEnv.entries.filter(Boolean).forEach(entry => {
    pluginEntries[`./${entry}_index`] = path.resolve(
      pluginRoot,
      'webpack',
      `${entry}_index`
    );
  });

  config.output = {
    path: path.join(__dirname, '..', 'public', 'webpack', pluginName),
    publicPath: '/webpack/' + pluginName + '/',
    uniqueName: pluginName,
  };

  var configModules = config.resolve.modules || [];
  // make webpack to resolve modules from core first
  configModules.unshift(path.resolve(__dirname, '..', 'node_modules'));
  // add plugin's node_modules to the reslver list
  configModules.push(path.resolve(pluginRoot, 'node_modules'));
  config.resolve.modules = configModules;

  //get the list of webpack plugins
  var plugins = config.plugins;
  console.log('path plugin', path.resolve(pluginRoot, 'webpack', 'index.js'));

  const webpackDirectory = path.resolve(
    __dirname,
    '..',
    'webpack',
    'assets',
    'javascripts',
    'react_app'
  );

  const pluginShared = {};
  getForemanFilePaths(true).forEach(file => {
    const key = file
      .replace(webpackDirectory, '')
      .replace(/\.(js|jsx)$/, '')
      .replace('../../foreman/', '');
    pluginShared[file] = {
      singleton: true,
      shareKey: key,
    };
  });

  const keys = [...Object.keys(pluginShared)];
  const newObj = {};
  console.log('newKeys', keys);
  keys.forEach(key => {
    newObj[key] = pluginShared[key];
  });
  plugins.push(
    new ModuleFederationPlugin({
      name: pluginName,
      filename: pluginName + '_remoteEntry.js',
      shared: {
        ...moduleFederationSharedConfig(env, argv),
        ...pluginShared,
      },
      exposes: pluginEntries,
    })
  );
  plugins.push(
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: pluginName + '/[name].css',
      chunkFilename: pluginName + '/[id].css',
    })
  );
  const manifestFilename = pluginName + '_manifest.json';
  plugins.push(
    new StatsWriterPlugin({
      filename: manifestFilename,
      fields: null,
      transform: function(data, opts) {
        return JSON.stringify(
          {
            assetsByChunkName: data.assetsByChunkName,
            errors: data.errors,
            warnings: data.warnings,
          },
          null,
          2
        );
      },
    })
  );
  plugins.push(
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      analyzerMode: 'static',
      openAnalyzer: false,
      statsFilename: pluginName + '_stats.json',
    })
  );
  config.plugins = plugins;
  var rules = config.module.rules;
  rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'sass-loader',
    ],
  });
  config.module.rules = rules;
  config.optimization = {
    ...config.optimization,
  };
  return config;
};

module.exports = function(env, argv) {
  var pluginsDirs = pluginUtils.getPluginDirs('pipe');
  var pluginsInfo = {};
  var pluginsConfigEnv = [];
  var pluginDirKeys = Object.keys(pluginsDirs.plugins);
  pluginDirKeys.forEach(pluginDirKey => {
    const parts = pluginDirKey.split(':');
    const name = parts[0];
    const entry = parts[1];
    if (pluginsInfo[name]) {
      pluginsInfo[name].entries.push(entry);
    } else {
      pluginsInfo[name] = {
        name,
        entries: [entry],
        root: pluginsDirs.plugins[pluginDirKey].root,
      };
    }
    if (!pluginDirKey.includes(':')) {
      console.log(
        'has global',
        pluginDirKey,
        pluginDirKeys.includes(pluginDirKey + ':global')
      );
      pluginsConfigEnv.push({
        plugin: {
          routes: pluginDirKeys.includes(pluginDirKey + ':routes'), // TODO load???
          global: pluginDirKeys.includes(pluginDirKey + ':global'),
          name: pluginDirKey,
          root: pluginsDirs.plugins[pluginDirKey].root,
        },
      });
    }
  });

  console.log('pluginsConfigEnv', pluginsConfigEnv);
  console.log('pluginsInfo', pluginsInfo);
  let configs = [];
  const pluginsInfoValues = Object.values(pluginsInfo);
  if (pluginsInfoValues.length > 0) {
    configs = pluginsInfoValues.map(plugin =>
      pluginConfig({ ...env, plugin }, argv)
    );
  }
  return [coreConfig(env, argv), ...configs];
};
