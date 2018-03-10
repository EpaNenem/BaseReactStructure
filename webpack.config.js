const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const package = require('./package.json');

module.exports = {
  entry: {
    app: './src/index.js',
    commons: Object.keys(package.dependencies)
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: './[name].[chunkhash].js',
    filename: './[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'commons'
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
};
