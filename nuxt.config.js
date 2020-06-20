import Prismic from 'prismic-javascript'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: 'Advocacia Alves',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  serverMiddleware: [
    { path: '/api/contact', handler: '~/api/contact.js' }
  ],
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: 'https://advocacia.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false
    }
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
  },
  generate: {
    subFolders: false,
    async routes () {
      const client = Prismic.client('https://advocacia.cdn.prismic.io/api/v2')

      const fetchRoutes = async (page = 1, routes = []) => {
        const response = (await client.query(
          Prismic.Predicates.at('document.type', 'blogpost'),
          { pageSize: 100, lang: '*', page: 1 }
        ))
        const allRoutes = routes.concat(response.results.map(e => `/blog/${e.uid}`))
        if (response.results_size + routes.length < response.total_results_size) {
          return fetchRoutes(page + 1, allRoutes)
        }
        return allRoutes
      }

      return await fetchRoutes()
    }
  }
}
