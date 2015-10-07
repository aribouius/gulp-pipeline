'use strict'

module.exports = function pipeline (config) {
  var assign = require('lodash').assign;
  pipeline.config = assign(require('./config'), config);
  require('require-dir')('./tasks');
};