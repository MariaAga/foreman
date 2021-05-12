/* eslint-disable no-var*/
'use strict';

var path = require('path');
var webpack = require('webpack');
var ForemanVendorPlugin = require('@theforeman/vendor')
  .WebpackForemanVendorPlugin;
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var pluginUtils = require('../script/plugin_webpack_directories');
var vendorEntry = require('./webpack.vendor');
var SimpleNamedModulesPlugin = require('../webpack/simple_named_modules');
var argvParse = require('argv-parse');
var fs = require('fs');
var { execSync } = require('child_process');

var args = argvParse({
  port: {
    type: 'string',
  },
  host: {
    type: 'string',
  },
});

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

const devServerConfig = () => {
  const result = require('dotenv').config();
  if (result.error && result.error.code !== 'ENOENT') {
    throw result.error;
  }

  return {
    port: args.port || '3808',
    host: args.host || process.env.BIND || 'localhost',
    http2: false,
  };
};

module.exports = env => {
  const devServer = devServerConfig();

  // set TARGETNODE_ENV=production on the environment to add asset fingerprints
  var production =
    process.env.RAILS_ENV === 'production' ||
    process.env.NODE_ENV === 'production';
  const mode = production ? 'production' : 'development';
  var bundleEntry = path.join(
    __dirname,
    '..',
    'webpack/assets/javascripts/bundle.js'
  );

  var plugins = pluginUtils.getPluginDirs('pipe');

  var resolveModules = [
    path.join(__dirname, '..', 'webpack'),
    path.join(__dirname, '..', 'node_modules'),
    'node_modules/',
  ].concat(pluginUtils.pluginNodeModules(plugins));

  if (env && env.pluginName !== undefined) {
    var pluginEntries = {};
    pluginEntries[env.pluginName] = plugins['entries'][env.pluginName];
    for (var entry of Object.keys(plugins['entries'])) {
      if (entry.startsWith(env.pluginName + ':')) {
        pluginEntries[entry] = plugins['entries'][entry];
      }
    }

    var outputPath = path.join(
      plugins['plugins'][env.pluginName]['root'],
      'public',
      'webpack'
    );
    var jsFilename = production
      ? env.pluginName + '/[name]-[chunkhash].js'
      : env.pluginName + '/[name].js';
    var cssFilename = production
      ? env.pluginName + '/[name]-[chunkhash].css'
      : env.pluginName + '/[name].css';
    var chunkFilename = production
      ? env.pluginName + '/[name]-[chunkhash].js'
      : env.pluginName + '/[name].js';
    var manifestFilename = env.pluginName + '/manifest.json';
  } else {
    var pluginEntries = plugins['entries'];
    var outputPath = path.join(__dirname, '..', 'public', 'webpack');
    var jsFilename = production ? '[name]-[chunkhash].js' : '[name].js';
    var cssFilename = production ? '[name]-[chunkhash].css' : '[name].css';
    var chunkFilename = production ? '[name]-[chunkhash].js' : '[name].js';
    var manifestFilename = 'manifest.json';
  }
  console.log({ manifestFilename, production });
  var entry = Object.assign(
    {
      bundle: bundleEntry,
      vendor: vendorEntry,
    },
    pluginEntries
  );

  const supportedLanguagesRE = new RegExp(
    `/(${supportedLanguages().join('|')})$`
  );

  var config = {
    entry: entry,
    mode,
    output: {
      // Build assets directly in to public/webpack/, let webpack know
      // that all webpacked assets start with webpack/

      // must match config.webpack.output_dir
      path: outputPath,
      publicPath: '/webpack/',
      filename: jsFilename,
      chunkFilename,
    },

    resolve: {
      modules: resolveModules,
      alias: Object.assign(
        {
          foremanReact: path.join(
            __dirname,
            '../webpack/assets/javascripts/react_app'
          ),
        },
        pluginUtils.aliasPlugins(pluginEntries)
      ),
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
        // {
        //   test: /\.css$/i,
        //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|gif|svg)$/,
          type: 'asset/inline',
        },
        // {
        //   test: /\.scss$/,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     'css-loader!sass-loader'
        //     // production
        //     //   ? 'css-loader!sass-loader'
        //     //   : 'css-loader?sourceMap!sass-loader?sourceMap',
        //   ],
        // },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },

    plugins: [
      new ForemanVendorPlugin({ mode }),
      // must match config.webpack.manifest_filename
      new StatsWriterPlugin({
        filename: manifestFilename,
        fields: null,
        transform: function(data) {
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
      }),
      new MiniCssExtractPlugin({
        filename: cssFilename,
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
    ],
  };
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        vendor1: {
          name: 'vendor1',
          // chunks: 'all',
          enforce: true,
        },
        vendors: false,
        default: false,
      },
    },
  };


  if (production) {
    config.plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: { warnings: false },
        },
        sourceMap: true,
      }),
      new SimpleNamedModulesPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CompressionPlugin()
    );
    config.devtool = 'source-map';
  } else {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin() // Enable HMR
    );
    config.devServer = {
      host: devServer.host,
      port: devServer.port,
      headers: { 'Access-Control-Allow-Origin': '*' },
      hot: true,
    };
    // https://github.com/webpack/webpack-dev-server/issues/2996
    // if (args.https) {
    //   config.devServer.https = {
    //     key: args.key,
    //     cert: args.cert,
    //     ca: args.cacert,
    //   };
    // }
    // Source maps
    config.devtool = 'inline-source-map';
  }
  console.log('\n\n\n\n\n');
  console.log({ dev: config.devServer });
  console.log({ args });
  console.log('\n\n\n\n\n');

  return config;
};
