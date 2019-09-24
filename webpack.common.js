const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入自動產生html檔案插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    post: './src/js/post.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  // 由于plugin可以携带参数/选项，必须在wepback配置中，向plugins属性传入new实例
  plugins: [
    new CleanWebpackPlugin(),//实例化，参数为目录
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: "post.html",
      template: "./src/post.html",
      inject: true,
      chunks: ['post'],
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,// 將CSS提取到單獨的文件中
            options: {
              publicPath : '../'
            }
          },
          
          // "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            },
          },
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src']
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};