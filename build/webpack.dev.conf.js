const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const { development } = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const devWebpackConfig = merge(baseConf, {
  mode: 'development',
  devtool: 'inline-source-map',
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
      template: path.join(__dirname, '../index.html'),
      inject: 'body'
    })
  ]
})
module.exports = devWebpackConfig
