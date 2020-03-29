module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      // 强智科技代理
      '/znlykjdxswxy': {
        target: 'http://zswxyjw.minghuaetc.com',
        pathRewrite: {
          '^/znlykjdxswxy': 'znlykjdxswxy'
        }
      }
    }
  }
}
