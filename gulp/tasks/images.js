'use strict'

var gulp = require('gulp');
var utils = require('../utils');
var config = require('../config');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegoptim = require('imagemin-jpegoptim');

gulp.task('images', function () {
  return gulp
    .src(utils.srcPath(config.images.src))
    .pipe(gulpif(config.production, imagemin({
      progressive: true,
      use: [pngquant()]
    })))
    .pipe(gulp.dest(
      utils.destPath(config.images.dest)
    ));
});
