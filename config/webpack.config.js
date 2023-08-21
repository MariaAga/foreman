/* eslint-disable no-var*/
'use strict';

var path = require('path');
var webpack = require('webpack');
const glob = require('glob');

var ForemanVendorPlugin = require('@theforeman/vendor')
  .WebpackForemanVendorPlugin;
// var { ForemanVendorPlugin } = require('./vendor-webpack-plugin');

var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var vendorEntry = require('./webpack.vendor');
var fs = require('fs');
const { ModuleFederationPlugin } = require('webpack').container;
var pluginUtils = require('../script/plugin_webpack_directories');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

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
const foremanCoreRemote = 'foremanReact';
const commonConfig = function(env, argv) {
  var production =
    process.env.RAILS_ENV === 'production' ||
    process.env.NODE_ENV === 'production';
  const mode = production ? 'production' : 'development';
  return {
    mode,
    optimization: {
      splitChunks: false,
    },
    devtool: 'eval-source-map',
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify'),
        // stream: require.resolve('stream-browserify'),
        // buffer: require.resolve('buffer'),
      },
      alias: {
        foremanReact: path.join(
          __dirname,
          '../webpack/assets/javascripts/react_app'
        ),
        // '@theforeman/vendor': path.join(
        //   __dirname,
        //   '..',
        //   '..',
        //   'foreman',
        //   'node_modules',
        //   '@theforeman',
        //   'vendor'
        // ),
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
      // new webpack.ProvidePlugin({
      //   Buffer: ['buffer', 'Buffer'],
      // }),
      // new webpack.ProvidePlugin({
      //   process: 'process/browser',
      // }),
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
    // '@theforeman/vendor': { singleton: true },
    // '@babel/core': { singleton: true },
    // webpack: { singleton: true },
    // foremanReact: { singleton: true },
    // [path.join(__dirname, '../webpack/assets/javascripts/react_app')]: {
    //   singleton: true,
    // },
    // TheForemanDevDeps: {
    //   // import: 'TheForemanDevDeps',
    //   singleton: true,
    // },
    // "../../foreman/webpack/assets/javascripts/foreman_navigation.js": {singleton: true},
    // "../../foreman/webpack/assets/javascripts/foreman_tools.js": {singleton: true},
    // '../../foreman/webpack/assets/javascripts/react_app/components/HostDetails/Templates/CardItem/CardTemplate/index.js': {
    // singleton: true,
    // import:
    // '../../foreman/webpack/assets/javascripts/react_app/components/HostDetails/Templates/CardItem/CardTemplate/index.js',
    // },

    // [path.join(__dirname, '../webpack/assets/javascripts/react_app/foreman_navigation.js')]: {
    // singleton: true,
    // },
    // foreman: {import: 'TheForemanDevDeps', singleton: true },
    // 'bundle.js': { singleton: true },
    // 'path-browserify': { singleton: true },
    // 'os-browserify': { singleton: true },
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
    // filename: '[name].js',
    // chunkFilename: '[name].js',
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
  plugins.push(
    new ModuleFederationPlugin(
      {
        name: foremanCoreRemote,

        shared: {
          ...moduleFederationSharedConfig(env, argv),

          './webpack/assets/javascripts/react_app/components/HostDetails/Templates/CardItem/CardTemplate/index.js': {
            singleton: true,
            eager: true,
            shareKey: 'CardTemplate',
          },
        },
      }
      // filename: 'remoteEntry.js',
      // exposes: {
      //   // './routes/RoutingService': path.resolve(
      //   //   __dirname,
      //   //   '..',
      //   //   'webpack',
      //   //   'assets',
      //   //   'javascripts',
      //   //   'react_app',
      //   //   'routes',
      //   //   'RoutingService.js'
      //   // ),
      //   './routes/RoutingService': './webpack/assets/javascripts/react_app/routes/RoutingService.js',
      //   './': path.resolve(
      //     __dirname,
      //     '..',
      //     'webpack',
      //     'assets',
      //     'javascripts',
      //     'react_app'
      //   ),
      // },
      // })
    )
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
  config.entry = {
    // global: './global_index.js',
    index: './index.js',
    // test: path.resolve(pluginEnv.root, 'node_modules', 'webpack', 'index.js'),
  };
  var pluginEntries = {
    './index': path.resolve(pluginRoot, 'webpack', 'index'),
  };
  pluginEnv.entries.filter(Boolean).forEach(entry => {
    pluginEntries[`./${entry}_index`] = path.resolve(
      pluginRoot,
      'webpack',
      `${entry}_index`
    );
    config.entry[entry] = `./${entry}_index`;
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
  plugins.push(
    new ModuleFederationPlugin({
      name: pluginName,
      filename: pluginName + '_remoteEntry.js',
      shared: {
        ...moduleFederationSharedConfig(env, argv),
        '../../foreman/webpack/assets/javascripts/react_app/components/HostDetails/Templates/CardItem/CardTemplate/index.js': {
          singleton: true,
          shareKey: 'CardTemplate',

        },
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
        // options: {
        // filename: pluginName + '/[name].css',
        // publicPath:
        //   path.join(
        //     __dirname,
        //     '..',
        //     'public',
        //     'webpack',
        //     'plugins_css',
        //     pluginName
        //   ) + '/',
        // },
      },
      'css-loader',
      'sass-loader',
    ],
  });
  config.module.rules = rules;

  return config;
};

module.exports = function(env, argv) {
  var pluginsDirs = pluginUtils.getPluginDirs('pipe');
  var pluginsInfo = {};
  var pluginsConfigEnv = [];
  const pluginDirKeys = Object.keys(pluginsDirs.plugins);
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
    // if (!pluginDirKey.includes('global') && pluginDirKey.includes('ansible')) {
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
  // if (pluginsConfigEnv.length > 0) {
  //   configs = pluginsConfigEnv.map(({ plugin }) =>
  //     pluginConfig({ ...env, plugin }, argv)
  //   );
  // }
  // console.log('configs', configs[0].plugins);
  // return configs;
  // if (env && env.plugin !== undefined) {
  //   return pluginConfig(env, argv);
  // }

  // return configs[0];
  return [coreConfig(env, argv), ...configs];
  // return coreConfig(env, argv);
};
