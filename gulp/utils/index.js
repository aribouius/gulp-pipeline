'use strict';

var config = require('../config');
var notify = require('./notify');

module.exports = {

  srcPath: function (file) {
    return this.buildPath(config.sourceDir, file);
  },

  destPath: function (file) {
    return this.buildPath(config.outputDir, file);
  },

  buildPath: function (base, files) {
    files = files || '';
    if (typeof files === 'string') {
      if (files.substr(0, 2) === './') {
        return files;
      }
      return [base, files].join('/').replace('//', '/');
    }
    return files.map(function (file) {
      return this.buildPath(base, file);
    }.bind(this));
  },

  errorHandler: function (type) {
    return function onError (e) {
      notify.error(e, type);
      this.emit('end');
    };
  },

  transformConfig: function (transforms) {
    return transforms.map(function (arr) {
      if (!Array.isArray(arr)) {
        arr = [arr];
      }
      if (typeof arr[0] === 'string') {
        arr[0] = require(arr[0]);
      }
      return arr;
    });
  }

};
