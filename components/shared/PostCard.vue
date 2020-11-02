<template>
  <v-card
    height="426"
    :width="width"
    :href="`/blog/${post.uid}`"
    class="mx-4 pa-4 d-flex flex-column"
    hover
    outlined
  >
    <v-img
      class="white--text align-end"
      :src="post.data.image.url"
      eager
    />
    <v-card-subtitle class="pb-0">
      {{ $categoryDescription(post.data.type) }}
    </v-card-subtitle>
    <v-card-title>{{ post.data.title }}</v-card-title>
  </v-card>
</template>
<script>

export default {
  props: {
    post: { type: Object, required: true },
    width: { type: String, required: true }
  }
}
</script>
<style scoped>
  .v-card__title {
    word-break: normal !important;
  }
</style>
