'use strict'

var gulp = require('gulp');
var config = require('../config');
var runSeq = require('run-sequence');

gulp.task('build', function (callback) {
  runSeq.apply(runSeq, config.buildTasks.concat(callback));
});
