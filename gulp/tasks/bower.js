'use strict'

var gulp = require('gulp');
var bower = require('gulp-bower');
var config = require('../config')

gulp.task('bower', function () {
  return bower(config.bower);
});
