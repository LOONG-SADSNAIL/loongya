const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: 'easylinkwebadmin',
  chainWebpack: config => {
    config.module
      .rule('svg')
      .uses.clear()
    config.module
      .rule('svg1')
      .test(/\.svg$/)
      .use('svg-sprite')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .include
      .add(resolve('src/icons/svg'))
      .end()
  },
  devServer: {
    host: 'localhost',
    port: 8888,
    open: true,
    proxy: 'http://localhost:8087',
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
