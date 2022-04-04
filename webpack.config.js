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
  //  webpack 命令会直接打包，   在局部的命令中，  node_modules/.bin/webpack  来打包
  //开发服务器， 用来自动化打包， 自动刷新， 自动打开浏览器( 自动监视， 只会在内存打包， 不会输出)
  // 开启服务器， 命令 npx webpack-deb-server
  devServer: {
    static: {
      directory: resolve(__dirname, 'webpack-npm-git/build'),
    },
    compress: true,
    port: 3000,
    open: true,
  },
}
