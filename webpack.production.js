var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader : 'file-loader'
    }
    ],
    postLoaders: [],
    noParse: /\.min\.js/
  },
  node:    {
    __dirname: true,
    fs:        'empty'
  }
};
