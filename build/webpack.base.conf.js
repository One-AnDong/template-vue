const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//生成绝对路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: path.resolve(__dirname, '..', 'src/main.js')
    // app: './src/main.js'
  },
  output: {
    filename: 'scripts/[name][hash].js',
    // filename: 'main.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  //配置简洁路径
  resolve: {
    extensions: ['.js', '.vue', '.json', '.styl'],
    alias: {
      src: resolve('src'),
      styl: resolve('src/assets/stylus'),
      img: resolve('src/assets/image')
    }
  },
  module: {
    rules: [
      //将es6转化为es5
      {
        test: /\.m?js$/,
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //处理vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      //处理css文件
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader']
      },
      //处理图片和字体图标
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      //处理pug
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
