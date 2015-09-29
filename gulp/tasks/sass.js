'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var utils = require('../utils');
var gulpif = require('gulp-if');
var config = require('../config');
var minify = require('gulp-minify-css');
var autoprefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp
    .src(utils.srcPath(config.sass.src))
    .pipe(gulpif(config.sourcemaps, sourcemaps.init()))
    .pipe(sass(config.sass.options))
    .on('error', utils.errorHandler('sass'))
    .pipe(gulpif(config.autoprefixer, autoprefix(config.autoprefixer)))
    .pipe(gulpif(config.production, minify()))
    .pipe(gulpif(config.sourcemaps, sourcemaps.write('.')))
    .pipe(gulp.dest(
      utils.destPath(config.sass.dest)
    ));
});
