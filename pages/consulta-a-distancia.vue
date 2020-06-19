<template>
  <div>
    <div
      v-for="(slice,i) in page.body"
      :key="i"
      class="mt-12 d-flex align-center"
      :style="getStyle(slice.primary)"
    >
      <v-container>
        <v-row class="d-flex align-center">
          <v-col v-if="slice.primary.type == 'Text'" cols="8" offset="2" class="text-center">
            <v-img v-if="slice.primary.image != null" :src="slice.primary.image.url" contain width="100" class="ma-auto" />
            <h1 class="display-1 font-weight-bold py-6">
              {{ slice.primary.title }}
            </h1>
            <prismic-rich-text :field="slice.primary.subtitle" />
          </v-col>
          <v-col v-if="slice.primary.type == 'Left'" cols="6">
            <v-img :src="slice.primary.image.url" contain max-width="100%" />
          </v-col>
          <v-col v-if="slice.primary.type != 'Text'" cols="6" class="text-center">
            <h1 :class="`display-1 font-weight-bold pb-6 ${getBannerFontColor(slice)}`">
              {{ slice.primary.title }}
            </h1>
            <prismic-rich-text :field="slice.primary.subtitle" :class="`${getBannerFontColor(slice)}`"/>
            <v-btn v-if="slice.primary.type == 'Banner'" color="#e57100" class="white--text">
              Agende uma consulta online agora
            </v-btn>
          </v-col>
          <v-col v-if="slice.primary.type == 'Right'" cols="6">
            <v-img :src="slice.primary.image.url" contain max-width="100%" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('consulta'))
      return {
        page: page.data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  methods: {
    getStyle (slice) {
      if (slice.type === 'Banner') {
        return `background-color:${slice.color};background-image:url(${slice.image.url});height:450px;background-position:right bottom;`
      }
      if (slice.type === 'Text' && slice.color) {
        return `background-color:${slice.color};color:white;`
      }
      return ''
    },
    getBannerFontColor (slice) {
      return slice.primary.type === 'Banner' ? 'white--text' : ''
    }
  }
}
</script>
