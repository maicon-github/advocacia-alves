<template>
  <v-card
    height="350"
    :href="`/blog/${post.uid}`"
    class="pa-4 d-flex flex-column img-parent"
    hover
    outlined
    :light="true"
  >
    <SeoImage :image="post.data.image" height="154px" css-class="img-cover" />
    <v-card-subtitle class="pa-0" style="font-size: 0.750rem;">
      {{ $categoryDescription(post.data.type) }}
    </v-card-subtitle>
    <v-card-title class="pa-0" style="font-weight: normal;">
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
  .v-card__title {
    word-break: normal !important;
  }
</style>
