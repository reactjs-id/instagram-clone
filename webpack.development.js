var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  devtool: 'source-maps',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader : 'file-loader'
    }
    ]
  }
};
