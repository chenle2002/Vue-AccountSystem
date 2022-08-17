//common js 暴露
module.exports = {
  // pages: {
  //     index: {
  //         //入口
  //         entry: 'src',
  //     },
  // },
  //关掉默认的语法检查
  lintOnSave: false,
  devServer: {
    proxy: {
      //当请求的前缀是api，直接转发请求到服务器5001端口
      '/api': {
        target: 'http://localhost:8443',
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中host的值
        pathRewrite:{
          //把请求中含有的api替换成空字符串
          '^/api': 'api',
        }
      }
    }
  }
}
