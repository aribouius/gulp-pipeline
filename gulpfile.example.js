/**
 * Example gulpfile.
 */
require('asset-pipeline')({

  sourceDir: './app/assets'

  outputDir: './public/assets'

  sass: {
    src: '/stylesheets/app.scss',
    dest: '/css'
  },

  browserify: {
    src: '/javascripts/app.js',
    transform: [
      'debowerify',
      'babelify'
    ]
  }

});
