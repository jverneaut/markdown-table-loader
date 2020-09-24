const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    publicPath: '/',
    path: join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.table\.md$/,
        use: 'markdown-table-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
