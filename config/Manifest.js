/* eslint-disable global-require, import/no-dynamic-require */
// import path from 'path';
var path = require('path');

const distFolder = path.resolve(__dirname, '../node_modules/@theforeman/vendor/dist');
// /home/mariaaga/git/foreman/node_modules/@theforeman/vendor/dist/manifest.development.json
const manifestFiles = {
  production: path.resolve(distFolder, './manifest.production.json'),
  development: path.resolve(distFolder, './manifest.development.json'),
};

class Manifest {
  get data() {
    if (!this._data) {
      this._loadManifest();
    }

    return this._data;
  }

  get files() {
    return [].concat(
      ...this.data.assets,
      ...Object.keys(this.data.assetsByChunkName).map(
        (key) => this.data.assetsByChunkName[key]
      )
    );
  }

  constructor(mode = 'production') {
    this.mode = mode.toLowerCase();
  }

  _loadManifest() {
    const filename = manifestFiles[this.mode];

    try {
      // use the original nodejs `require` method
      // so we can require the `manifest.json` daynamically
      // eslint-disable-next-line no-undef
      this._data = __non_webpack_require__(filename);
    } catch (error) {
      throw new Error(`Unable to load manifest file: ${filename}`);
    }
  }
}

module.exports = {
  Manifest,
}
