const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './webpack-npm-git/src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'webpack-npm-git/build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack-npm-git/src/index.html',
    }),
  ],
  mode: 'development',
}
