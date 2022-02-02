<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
        </v-col>
      </v-row>
    </v-container>
    <PageTitle />
    <FeaturedMaterial :id="uid" :title="titulo_material" :sub-title="resumo_material" :image="content_image" />
    <MaterialFilter @changeFormato="changeFormato" @changeCategoria="changeCategoria" />
    <MaterialList :materiais="materiais" :loading="loading" />
    <Pagination v-show="materiais.length > 0" :total="total" :loading="loading" @change="loadMateriais" />
    <br/>
  </div>
</template>

<script>
import Breadcrumb from '../../components/shared/Breadcrumb'
import PageTitle from '../../components/materiais/PageTitle'
import FeaturedMaterial from '../../components/materiais/FeaturedMaterial'
import MaterialList from '../../components/materiais/MaterialList'
import Pagination from '../../components/shared/Pagination'
import MaterialFilter from '../../components/materiais/MaterialFilter'

export default {
  components: { Breadcrumb, PageTitle, FeaturedMaterial, MaterialList, Pagination, MaterialFilter },

  data () {
    return {
      materiais: [],
      formatoSelecionado: [],
      categoriaSelecionado: []
    }
  },

  computed: {
    breadCrumbItems () {
      return [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Materiais', disabled: true, href: '/materiais' }
      ]
    }
  },

  async asyncData ({ $prismic, error, query }) {
    try {
      const featuredPost = await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'landing_page'),
          $prismic.predicates.at('my.landing_page.featured', true)
        ],
        { pageSize: 1, page: 1, orderings: '[document.last_publication_date desc]' }
      )

      return {
        loading: true,
        total: 0,
        uid: featuredPost.results[0].uid,
        ...featuredPost.results[0].data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },

  async mounted () {
    await this.loadMateriais(1)
  },

  methods: {
    async changeFormato (formatoSelecionado) {
      this.formatoSelecionado = formatoSelecionado

      await this.loadMateriais(1)
    },
    async changeCategoria (categoriaSelecionado) {
      this.categoriaSelecionado = categoriaSelecionado

      await this.loadMateriais(1)
    },
    async loadMateriais (page) {
      if (page === 1) {
        this.materiais = []
      }

      this.loading = true

      const filters = [
        this.$prismic.predicates.at('document.type', 'landing_page')
      ]

      if (this.formatoSelecionado) {
        filters.push(this.$prismic.predicates.any('my.landing_page.formato', this.formatoSelecionado))
      }

      if (this.categoriaSelecionado) {
        filters.push(this.$prismic.predicates.any('my.landing_page.categoria', this.categoriaSelecionado))
      }

      const materiais = await this.$prismic.api.query(
        filters,
        { pageSize: 9, page, orderings: '[document.last_publication_date desc]' }
      )

      this.total = materiais.total_pages

      this.materiais = [...this.materiais, ...materiais.results]

      this.loading = false
    }
  }
}
</script>
