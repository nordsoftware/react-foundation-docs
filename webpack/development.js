var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var getConfig = require('./config');

module.exports = Object.assign({}, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/main.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}, getConfig());  // gets the config with default public path ('/')
