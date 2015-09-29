module.exports = function (karma) {

  var utils = require('../utils');
  var merge = require('lodash').merge;
  var config = require('./');
  var basePath = process.cwd();

  var preProcessors = {};
  preProcessors[config.test.src] = ['browserify'];

  var bConfig = merge({}, config.browserify.options);
  bConfig.transform = utils.transformConfig(bConfig.transform || []);

  karma.set(merge({
    basePath: basePath,
    files: [
      config.test.src
    ],
    frameworks: [
      'jasmine',
      'browserify'
    ],
    browsers: [
      'Chrome'
    ],
    reporters: [
      'progress'
    ],
    exclude: [],
    preprocessors: preProcessors,
    port: 9876,
    colors: true,
    logLevel: karma.LOG_INFO,
    autoWatch: true,
    browserify: bConfig
  }, config.karma));

};
