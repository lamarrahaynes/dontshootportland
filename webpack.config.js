var webpack = require('webpack');

module.exports = {
  context: __dirname + '/',
  entry: [
    'babel-polyfill',
    './src/js/root.js'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};