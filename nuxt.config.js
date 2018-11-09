const contentful = require('contentful');
const config = require('./.contentful.json');

const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN,
});

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  // env:は、クライアントサイドとサーバーサイドで使える環境線数を設定している
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_ID: config.CTF_BLOG_ID,
  },
  generate: {
    // generateされるときにAPIを叩いて静的サイトの値を取得している
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: config.CTF_BLOG_ID,
        }),
        // client.getEntries({
        //   content_type: config.CTF_CATEGORY_ID,
        // }),
      ])
        .then(([posts, categories]) => [
          ...posts.items.map(post => `articles/${post.fields.id}`),
          // ...categories.items.map(category => `articles/category/${category.fields.slug}`),
        ]);
    },
  }
}
