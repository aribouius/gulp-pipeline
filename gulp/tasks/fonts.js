'use strict'

var gulp = require('gulp');
var utils = require('../utils');
var config = require('../config');

gulp.task('fonts', function () {
  return gulp
    .src(utils.srcPath(config.fonts.src))
    .pipe(gulp.dest(
      utils.destPath(config.fonts.dest)
    ));
});
