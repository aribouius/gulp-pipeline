'use strict'

var gulp = require('gulp');
var config = require('../config');
var runSeq = require('run-sequence');

gulp.task('default', function (callback) {
  runSeq.apply(runSeq, config.defaultTasks.concat(callback));
});
