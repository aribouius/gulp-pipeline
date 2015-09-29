'use strict';

var util = require('gulp-util');

/**
 * Default configuration
 */
module.exports = {

  /**
   * Run in production mode?
   */
  production: !!util.env.production,

  /**
   * Use sourcemaps?
   */
  sourcemaps: true,

  /**
   * Source file directory
   */
  sourceDir: './app/assets',

  /**
   * Output directory
   */
  outputDir: './public/assets',

  /**
   * Default tasks
   */
  defaultTasks: [
    'build',
    'watch'
  ],

  /**
   * Build tasks
   */
  buildTasks: [
    ['clean', 'bower'],
    ['sass', 'browserify', 'images', 'fonts'],
    'manifest'
  ],

  /**
   * Watch tasks
   */
  watchTasks: [
    'sass',
    'browserify',
    'images',
    'fonts'
  ],

  /**
   * Sass
   */
  sass: {
    src: '/stylesheets/**/*.{sass,scss}',
    dest: '/css',
    options: {
      includePaths: ['vendors']
    }
  },

  /**
   * Browserify
   */
  browserify: {
    src: '/javascripts/app.js',
    dest: '/js',
    watch: '/javascripts/**/*.js',
    options: {
      debug: true,
      transform: [
        'debowerify',
        ['babelify', { compact: true }]
      ]
    }
  },

  /**
   * Images
   */
  images: {
    src: '/images/**/*.{jpg,jpeg,png,gif,svg}',
    dest: '/img'
  },

  /**
   * Fonts
   */
  fonts: {
    src: '/fonts/**/*.{eot,woff,svg,ttf}',
    dest: '/fonts'
  },

  /**
   * Manifest
   */
  manifest: {
    src: '/**/*',
    dest: '/manifest.json'
  },

  /**
   * Test
   */
  test: {
    src: './test/javascripts/**/*.spec.js',
  },

  /**
   * Uglify
   */
  uglify: {
    mangle: true
  },

  /**
   * CSS Autoprefixer
   */
  autoprefixer: {
    browsers: ['last 2 versions']
  }

};
