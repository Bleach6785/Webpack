var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入自動產生html檔案插件

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js'
  },
  devServer: {
    contentBase: './dist' //啟動服務時檔案讀取的路徑
  },
  // 由于plugin可以携带参数/选项，必须在wepback配置中，向plugins属性传入new实例
  plugins: [
    new CleanWebpackPlugin(),//实例化，参数为目录
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true
    }),
  ],
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader", // 将 JS 字符串生成为 style 节点
            "css-loader", // 将 CSS 转化成 CommonJS 模块
            "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
    }]
}
};