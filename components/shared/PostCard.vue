<template>
  <v-card
    max-width="395"
    height="100%"
    :href="`/blog/${post.uid}`"
    class="pa-4 mx-auto d-block"
    hover
    outlined
    light
  >
    <nuxt-img :src="post.data.image.url" sizes="sm:200 md:200 lg: 300" class="mx-auto d-block img-cover" />
    <v-card-subtitle class="pa-0 card-subtitle">
      {{ $categoryDescription(post.data.type) }}
    </v-card-subtitle>
    <v-card-title class="pa-0 card-title">
      {{ post.data.title }}
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props: { post: { type: Object, required: true } }
}
</script>
<style scoped>
  .v-card__title { word-break: normal !important; }
  .card-subtitle { font-size: 0.750rem; }
  .card-title { font-weight: normal; }
</style>
