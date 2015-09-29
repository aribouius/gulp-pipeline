'use strict'

var gulp = require('gulp');
var utils = require('../utils');
var clone = require('lodash').clone;
var buffer = require('vinyl-buffer');
var gulpif = require('gulp-if');
var config = require('../config');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var settings = config.browserify;
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var entryFile = settings.entry || settings.src;

function bundle () {
  var src = utils.srcPath(entryFile);
  var ops = clone(settings.options, true);
  ops.transform = utils.transformConfig(ops.transform || []);
  return browserify(src, ops).bundle();
}

gulp.task('browserify', function () {
  return bundle()
    .on('error', utils.errorHandler('browserify'))
    .pipe(source(entryFile.split('/').pop()))
    .pipe(buffer())
    .pipe(gulpif(config.sourcemaps, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(config.production, uglify(config.uglify)))
    .pipe(gulpif(config.sourcemaps, sourcemaps.write('.')))
    .pipe(gulp.dest(
      utils.destPath(settings.dest)
    ));
});
