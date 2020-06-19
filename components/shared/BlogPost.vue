<template>
  <v-card class="mx-auto" height="450" hover :href="`/blog/${post.uid}`">
    <v-img
      :height="imageSize"
      class="white--text align-end"
      :src="post.data.image.url"
      eager
    />
    <v-card-subtitle class="pb-0">
      {{ post.data.type }}
    </v-card-subtitle>
    <v-card-title>{{ post.data.title }}</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    imageSize: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
  .v-card__title {
    word-break: normal !important;
  }
</style>
