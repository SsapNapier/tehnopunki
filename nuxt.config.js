const path = require('path');
const axios = require('axios');

module.exports = {

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
     ['@nuxtjs/proxy'],
    [
      'storyblok-nuxt',
     {
       accessToken:
         process.env.NODE_ENV == 'production'
           ? 'bpT9mU2kAMU0HbLvwmtDTAtt'
           : 'A5iPGJy3ZWTDfuPWaQqkKgtt',
       cacheProvider: 'none'}],
     [
  'nuxt-fontawesome', {
    imports: [
     {
       set: '@fortawesome/free-solid-svg-icons',
       icons: ['fas']
     },
     {
       set:'@fortawesome/free-brands-svg-icons',
       icons: ['fab']
     }
   ]
  }]
  ],
  devServer: {
  proxy: {
      '/api/': {
        target: 'http://localhost:3000',
        secure: false,
      }
    }
  },
  generate: {
    dir: path.resolve(__dirname, './server/public'),
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
