const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? 'https://github.com/tonytang0909-grl/porto' : '/',
  transpileDependencies: true
})
