var webpack = require('webpack');
var path = require('path');

var config = {
  entry: ['./src/index.js'],
  babel: {
    presets: ['es2015']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loaders: ['babel'], 
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loaders: ['vue'],
      }
    ]
    
  }
};

module.exports = config;
