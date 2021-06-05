<template>
  <v-card
    height="100%"
    :href="`/blog/${post.uid}`"
    class="pa-4 img-parent"
    hover
    outlined
  >
    <SeoImage :image="post.data.image" height="154px" css-class="img-cover" />
    <v-card-subtitle class="pa-0 card-subtitle">
      {{ $categoryDescription(post.data.type) }}
    </v-card-subtitle>
    <v-card-title class="pa-0 card-title">
      {{ post.data.title }}
    </v-card-title>
  </v-card>
</template>
<script>
import SeoImage from '../shared/SeoImage'
export default {
  components: { SeoImage },
  props: {
    post: { type: Object, required: true }
  }
}
</script>
<style scoped>
  .v-card__title { word-break: normal !important; }
  .card-subtitle { font-size: 0.750rem; }
  .card-title { font-weight: normal; }
</style>
