'use strict'

module.exports = function pipeline (config) {
  var merge = require('lodash').merge;
  pipeline.config = merge(require('./config'), config);
  require('require-dir')('./tasks');
};