var HtmlWebpackPlugin = require('html-webpack-plugin');
var getConfig = require('./config');

module.exports = Object.assign({}, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/main.html'
    }),
  ]
}, getConfig('react-foundation-docs/'));  // sets the public path to be under '/react-foundation-docs/' for production
