var webpack = require('webpack');

module.exports = {
  context: __dirname + '/',
  entry: [
    'babel-polyfill',
    './src/js/app.js'
  ],
  output: {
    path: './public/js/',
    publicpath: '/js/',
    filename: 'index.js'
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