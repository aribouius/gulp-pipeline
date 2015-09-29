'use strict'

var rev = require('gulp-rev');
var gulp = require('gulp');
var utils = require('../utils');
var gulpif = require('gulp-if');
var config = require('../config');
var ignore = require('gulp-ignore');
var revReplace = require('gulp-rev-replace');

gulp.task('manifest', function () {
  var path = utils.destPath(config.manifest.dest).split('/');
  var file = path.pop();
  var dest = path.join('/')
  var src  = [
    utils.destPath(config.manifest.src),
    '!' + utils.destPath(file),
    '!' + utils.destPath('**/*.map')
  ];
  return gulp
    .src(src)
    .pipe(ignore.exclude(/-[0-9a-f]{10}\./i))
    .pipe(rev())
    .pipe(revReplace())
    .pipe(gulp.dest(config.outputDir))
    .pipe(rev.manifest(file, { merge: true }))
    .pipe(gulp.dest(dest));
});