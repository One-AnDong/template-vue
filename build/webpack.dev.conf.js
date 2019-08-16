const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const { development } = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseConf, {
  mode: 'development',
  //显示错误的具体位置
  devtool: 'inline-source-map',
  //服务器配置
  devServer: {
    compress: true,
    https: false,
    port: development.port,
    open: false,
    historyApiFallback: true,
    proxy: {}
  },
  module: {
    rules: [
      //postcss
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      //处理stylus
      {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ]
})
module.exports = new Promise((res, rej) => {
  portfinder.basePort = development.port
  //端口被占用，重新获取端口
  portfinder.getPort((err, port) => {
    if (err) {
      rej(err)
    } else {
      devWebpackConfig.devServer.port = port
      res(devWebpackConfig)
    }
  })
})
