'use strict'

var gulp = require('gulp');
var karma = require('karma').server;

function initKarma (singleRun) {
  karma.start({
    configFile : __dirname + '/../config/karma.js',
    singleRun  : singleRun
  });
};

gulp.task('test', function () {
  initKarma(true);
});

gulp.task('tdd', function () {
  initKarma(false);
});
