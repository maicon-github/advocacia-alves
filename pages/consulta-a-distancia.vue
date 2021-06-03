<template>
  <div>
    <HeaderSection
      :caption="hcaption1"
      :image="himage"
      :title="hcaption2"
      :text="htext"
      :btn-text="hcaption3"
    />

    <TextSection
      :text="stext"
      :icon="sicon"
      :caption="scaption"
    />

    <ItemsSection :items="items" />

    <FooterSection
      :caption1="dleft_caption"
      :text="dleft_text"
      :caption2="dright_caption"
      :color1="dleft_color"
      :color2="dright_color"
      :icon="dicon"
    />
  </div>
</template>
<script>
import TextSection from '../components/distancia/TextSection'
import ItemsSection from '../components/distancia/ItemsSection'
import HeaderSection from '../components/distancia/HeaderSection'
import FooterSection from '../components/distancia/FooterSection'
export default {
  components: { HeaderSection, ItemsSection, TextSection, FooterSection },
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('distance_consultation'))
      return { ...page.data }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description }
      ],
      link: [
        { rel: 'preload', type: 'image', href: this.himage.url }
      ]
    }
  }
}
</script>
