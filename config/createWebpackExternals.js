/* eslint-disable no-unused-vars */
// import { modules } from '@theforeman/vendor-core';
var modules = require('@theforeman/vendor-core').modules;
const createWebpackExternals = () => {
  const externals = {};

  for (const module of modules) {
    externals[module.name] = module.key;
  }

  return externals;
};

module.exports = {
  createWebpackExternals,
};
