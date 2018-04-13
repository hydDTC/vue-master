var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js', //入口文件
  output: {   //出口
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js' //实际用的是这个文件
  },
  //配置模块加载器
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
         test: /\.css$/,
         use: [ 'style-loader', 'css-loader' ]
      },
      {
          test: /\\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
          loader: "file-loader"
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
           loader: 'url-loader',
           options:{
　　　　　　　　　　//这里打包后可以把所有的字体库都放在fonts文件夹中
               name:'fonts/[hash].[ext]'
           }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
