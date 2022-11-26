const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  chainWebpack: config => {
    // config.module
    //   .rule('md')
    //   .test(/\.md$/)
    //   .use('html-loader')
    //   .loader('html-loader')
    //   .end()
    //   .use('markdown-loader')
    //   .loader('markdown-loader')
    //   .options({
    //     // raw: true
    //   })

    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })

  }


})
