module.exports = {
  publicPath: '/myblog/',
  // css: {
  //   loaderOptions: {
  //     postcss:{
  //       plugins:[
  //         require('postcss-px2rem')({
  //           remUnit: 37.5
  //         })
  //       ]
  //     }
  //   }
  // },
  devServer: {
    port: 8080,
    disableHostCheck: true, // 可使用本地host配置的域名访问
    proxy: {
      '/api': {
        target: 'http://localhost:9020',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'    //代理的路径
        }
      }
    }

  }
}
