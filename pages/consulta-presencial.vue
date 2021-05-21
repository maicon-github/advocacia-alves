<template>
  <div>
    <HeaderSection
      :caption="hcaption1"
      :image="himage"
      :title="hcaption2"
      :text="htext"
    />

    <ItemsSection :items="items" />

    <FooterSection
      :caption1="dright_caption"
      :text="dleft_caption"
      :caption2="drighttext"
      :color1="dleft_color"
      :color2="dright_color"
      :icon="dicon"
    />
  </div>
</template>
<script>
import FooterSection from '../components/presencial/FooterSection'
import ItemsSection from '../components/presencial/ItemsSection'
import HeaderSection from '../components/presencial/HeaderSection'
export default {
  components: { HeaderSection, ItemsSection, FooterSection },
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('face_consultation'))

      return { ...page.data }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description }
      ]
    }
  }
}
</script>
