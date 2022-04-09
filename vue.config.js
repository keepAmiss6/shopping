module.exports = {
  configureWebpack:{
    resolve:{
      // 配置别名
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'view':'@/view'
      }
    }
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // 全局sass变量
  //       //sass-loader 8.0.0以前版本（包含）
  //       prependData: `@import "~@/assets/scss/index.scss";`
  //     }
  //   }
  // }
}
