<template>
  <v-card
    height="350"
    :href="`/blog/${post.uid}`"
    class="pa-4 d-flex flex-column"
    hover
    outlined
    :light="true"
  >
    <img
      class="white--text align-end"
      :src="post.data.image.url"
      width="100%"
    />
    <v-card-subtitle class="pa-0" style="font-size: 0.750rem;">
      {{ $categoryDescription(post.data.type) }}
    </v-card-subtitle>
    <v-card-title class="pa-0" style="font-weight: normal;">
      {{ post.data.title }}
    </v-card-title>
  </v-card>
</template>
<script>

export default {
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
