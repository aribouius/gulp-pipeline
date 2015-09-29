'use strict';

var util = require('gulp-util');

var prefix = function (type) {
  return '[' + (type || 'gulp') + ']';
};

module.exports = {

  alert: function (message, type) {
    util.log(
      prefix(type),
      util.colors.yellow(message)
    );
  },

  success: function (message, type) {
    util.log(
      prefix(type),
      util.colors.green(message)
    );
  },

  error: function (error, type) {
    var msg = typeof error === 'object'
      ? error.message
      : error;
    util.log(
      prefix(type),
      util.colors.red(msg)
    );
  }

};
