<template>
  <v-card
    height="426"
    :href="`/blog/${post.uid}`"
    class="pa-4 d-flex flex-column"
    hover
    outlined
    :light="true"
  >
    <v-img
      class="white--text align-end"
      :src="post.data.image.url"
      eager
    />
    <v-card-subtitle class="pa-0">
      {{ $categoryDescription(post.data.type) }}
    </v-card-subtitle>
    <v-card-title class="pa-0">
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
