import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';
import path from 'path';

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'public'),
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
  // inline: true,
  quiet: true,
  noInfo: true,
  // lazy: true, // compiles on every request to the entry point
  // watchDelay: 300,
  headers: {'Access-Control-Allow-Origin': '*'},
  // proxy: {
  //  "*": "http://localhost:3000"
  // },
  stats: {
    colors: true
  },
  progress: true
}).listen(3000, 'localhost', (err) => {
  if (err) { console.log(err); }
  console.log('Webpack development server listening on localhost:3000');
});