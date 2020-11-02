import Prismic from 'prismic-javascript'

export default {
  target: 'static',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: { lang: 'pt-BR' },
    titleTemplate: '%s',
    title: 'Advocacia Alves - Previdenciário - Especialistas com atendimento online e presencial',
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
    '~/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/mask.js',
    '~/plugins/category-description.js'
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
    '@nuxtjs/prismic',
    '@nuxtjs/recaptcha',
    '@nuxtjs/sitemap',
    'nuxt-precompress'
  ],
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
    async routes () {
      const client = Prismic.client(process.env.PRISMIC_ENDPOINT)

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
  },
  prismic: {
    endpoint: 'https://advocacia.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver'
  },
  recaptcha: {
    hideBadge: false,
    siteKey: '6Lc7ybgZAAAAAJ6REYF30iOA8TL2Mi1PzySpzJN6',
    version: 2,
    size: 'invisible'
  },
  sitemap: {
    hostname: 'https://advocaciaalves.com.br',
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true
  }
}
