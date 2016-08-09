var argv = require('yargs').argv;
var path = require('path');

module.exports = function(config) {
  config.set({
    browsers:   ['PhantomJS'],
    singleRun:  !argv.watch,
    frameworks: ['jasmine'],
    reporters:  ['spec'],
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/**/*.js'
    ],
    preprocessors: {
      ['./test/**/*.js'] : ['webpack', 'sourcemap']
    },
    babel: {
      presets: ['es2015']
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root:       path.resolve(__dirname, './src'),
        extensions: ['', '.js', '.jsx'],
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.vue$/,
            loaders: ['vue']
          }
        ]
      },
    },
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
}
