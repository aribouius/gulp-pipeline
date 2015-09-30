'use strict'

var gulp = require('gulp');
var utils = require('../utils');
var config = require('../config');
var runSeq = require('run-sequence');

gulp.task('watch', config.watchTasks.map(function (task) {
  var name = 'watch:' + task;
  gulp.task(name, function () {
    var src = utils.srcPath(config[task].watch || config[task].src);
    return gulp.watch(src, function () {
      runSeq(task, 'manifest');
    });
  });
  return name;
}));
