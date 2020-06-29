<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2" class="pb-12">
        <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
        <prismic-rich-text :field="content" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Breadcrumb from '../components/shared/Breadcrumb'
export default {
  components: { Breadcrumb },
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('termos_de_uso'))
      return { ...page.data }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  computed: {
    breadCrumbItems () {
      return [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Termos de Uso', disabled: true, href: '/termos-de-uso' }
      ]
    }
  }
}
</script>
