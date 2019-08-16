const merge = require('webpack-merge')
const path = require('path')
const baseConf = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { production } = require('../config')

const prodWebpackConfig = merge(baseConf, {
  mode: 'production',
  devtool: 'source-map',
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
    //将打包后的css单独输出到目录
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash:7].css'
    }),
    //生成index.html文件，并引入打包后js文件
    new HtmlWebpackPlugin({
      filename: path.resolve(
        __dirname,
        '..',
        `${production.outputFile}/index.html`
      ),
      template: 'index.html',
      inject: 'body',
      //html压缩
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    //优化压缩css文件
    new OptimizeCssAssetsPlugin()
  ]
})
module.exports = prodWebpackConfig
