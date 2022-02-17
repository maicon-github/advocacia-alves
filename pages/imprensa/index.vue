<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
        </v-col>
      </v-row>
    </v-container>
    <PageTitle :imprensa="imprensa" />
    <FeaturedImprensa :imprensa="imprensa" />
    <ImprensalList :pautas="pautas" :loading="loading" />
    <Pagination v-show="pautas.length > 0" :total="total" :loading="loading" @change="loadImprensa" />
  </div>
</template>

<script>
import Breadcrumb from '../../components/shared/Breadcrumb'
import PageTitle from '../../components/imprensa/PageTitle'
import FeaturedImprensa from '../../components/imprensa/FeaturedImprensa'
import ImprensalList from '../../components/imprensa/ImprensalList'
import Pagination from '../../components/shared/Pagination'

export default {
  components: { Breadcrumb, PageTitle, FeaturedImprensa, ImprensalList, Pagination },

  async asyncData ({ $prismic, error, params }) {
    try {
      const newsroom = await $prismic.api.getSingle('newsroom')
      return {
        imprensa: newsroom.data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },

  data () {
    return {
      pautas: [],
      total: 0,
      loading: false
    }
  },

  computed: {
    breadCrumbItems () {
      return [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Imprensa', disabled: true, href: '/imprensa' }
      ]
    }
  },

  async mounted () {
    await this.loadImprensa(1)
  },

  methods: {
    async loadImprensa (page) {
      if (page === 1) {
        this.dados = []
      }

      this.loading = true

      const pautas = await this.$prismic.api.query(
        [this.$prismic.predicates.at('document.type', 'release_content')],
        { pageSize: 9, page, orderings: '[document.last_publication_date desc]' }
      )

      this.total = pautas.total_pages

      this.pautas = [...this.pautas, ...pautas.results]

      this.loading = false
    }
  },

  head () {
    return {
      title: this.imprensa.title,
      meta: [
        { hid: 'description', name: 'description', content: this.imprensa.meta_description }
      ]
    }
  }
}
</script>
