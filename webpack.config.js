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
        //处理 css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        //处理图片资源,  关闭es6 module中的模块化， 用limit来限制， 当大于这个值则会压缩 用base64的编码方式
        test: /\.(jpg|png|gif)$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              esModule: false,
              outputPath: 'imgs',
            },
          },
        ],
      },
      {
        //处理html中的图片资源
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        //处理其他所有资源, 排除之前所有的loader配置的资源以外的所有资源,
        exclude: /\.(html|css|js|jpg|png|gif)$/,
        // url-loader 是在 file-loader上做了一点优化， 设置limit 压缩图片
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
        },
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
  // 开发服务器， 用来自动化打包， 自动刷新， 自动打开浏览器( 自动监视， 只会在内存打包， 不会输出)
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
