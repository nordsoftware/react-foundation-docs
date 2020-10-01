var path = require('path');

module.exports = (publicPath = "/") => ({
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    // this creates a duplicate output bundle for local serving as the app expects output bundle to be in the 'react-foundation-docs/' sub-directory
    // You can comment it out to push it to GitHub Pages, this is purely for the local serving of the dist directory
    'react-foundation-docs/app': path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    // sets the output public path to be under the publicPath passed
    publicPath: publicPath,
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          'loader': 'url?prefix=img/&limit=5000',
        }
      },
      {
        test: /\.(mp3|ogg|wav)$/,
        use: {
          loader: 'url?prefix=audio/&limit=5000',
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff',
        }
      },
      {
        test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file'
        }
      }
    ]
  }
});
