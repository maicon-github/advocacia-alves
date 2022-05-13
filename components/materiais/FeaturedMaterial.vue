<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6" class="px-sm-8">
        <div class="flex subtitle-2 font-weight-medium mb-5 destaque">
          EM DESTAQUE
        </div>
        <div class="flex display-1 font-weight-regular">
          <a :href="`/materiais/${id}`" class="text-decoration-none">
            {{ title }}
          </a>
        </div>
        <br>
        <prismic-rich-text :field="subTitle" />
      </v-col>
      <v-col cols="12" md="6" class="img-parent">
        <a :href="`/materiais/${id}`">
          <SeoImage :image="image" css-class="ma-auto d-block img-contain px-sm-8" />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SeoImage from '../shared/SeoImage'
export default {
  components: { SeoImage },
  props: {
    title: { type: String, required: true },
    subTitle: { type: Array, required: true },
    image: { type: Object, required: true },
    id: { type: String, required: true }
  }
}
</script>
<style scoped>
  a, a:visited {
    text-decoration: none;
    color: inherit;
  }
  .destaque {
    color: #4085c6;
  }
</style>
