const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('base', resolve('src/base'))
  }
}
