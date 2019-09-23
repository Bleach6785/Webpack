var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js'
  },
  // 由于plugin可以携带参数/选项，必须在wepback配置中，向plugins属性传入new实例
  plugins: [
    new CleanWebpackPlugin(),//实例化，参数为目录
  ],
};