// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/zhuangTang.github.io/dist/'
    : '/',
  transpileDependencies: true
};
