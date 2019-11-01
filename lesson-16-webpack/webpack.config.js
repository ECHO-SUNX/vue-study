const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]

  },
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new UglifyjsWebpackPlugin()
  ],
  devServer:{
    contentBase: './public',
    inline:true,
    port:8888
  }
}


/*
  一切都从 'npm init'  @后背接版本号
* package.json 文件是script配置 默认是优先本地node_modules文件夹
* HtmlWebpackPlugin  将index.html打包到发布目录
* UglifyjsWebpackPlugin js压缩
* VueLoaderPlugin .vue文件必备插件
* */
