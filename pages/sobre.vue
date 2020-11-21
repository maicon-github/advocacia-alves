<template>
  <v-app>
    <v-container>
      <MainSection caption="SOBRE NÓS" :title="title" :subtitle="subtitle" />

      <LineValues :items="values" />

      <LineWay :items="way" />

      <LineOrigin :title="origin_title" :subtitle="origin_subtitle" :text="origin_text" />

      <LineFounder
        :picture="founder_photo"
        :name="founder_name"
        :office="founder_office"
        :text1="founder_presentation"
        :text2="founder_presentation2"
      />
    </v-container>
    <Newsletter />
  </v-app>
</template>
<script>
import LineWay from '../components/sobre/LineWay'
import LineOrigin from '../components/sobre/LineOrigin'
import LineValues from '../components/sobre/LineValues'
import Newsletter from '../components/shared/Newsletter'
import MainSection from '../components/sobre/MainSection'
import LineFounder from '../components/sobre/LineFounder'
export default {
  components: {
    LineWay,
    LineOrigin,
    LineValues,
    Newsletter,
    MainSection,
    LineFounder
  },
  async asyncData ({ $prismic, error }) {
    try {
      const sobre = (await $prismic.api.getSingle('sobre'))
      window.console.log(sobre)
      return {
        unique: 0,
        ...sobre.data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  computed: {
    breadCrumbItems () {
      return [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Sobre nós', disabled: true, href: '/sobre' }
      ]
    }
  }
}
</script>
