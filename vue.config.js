const glob = require("glob");
const path = require("path");
const PurgecssPlugin = require('purgecss-webpack-plugin')

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .use('pug-plain-loader')
    config.plugin("purgecss").use(PurgecssPlugin, [ {
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*.*`)
    } ])
  }
}