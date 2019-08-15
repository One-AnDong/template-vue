const merge = require('webpack-merge')
const path = require('path')
const baseConf = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { production } = require('../config')

const prodWebpackConfig = merge(baseConf, {
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash:7].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      inject: 'body'
    })
  ]
})
module.exports = prodWebpackConfig
