<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="12">
        <p class="display-1">
          {{ title }}
        </p>
      </v-col>
      <v-col v-for="(post, i) in posts" :key="i" :cols="4">
        <PostCard :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PostCard from '../shared/PostCard'
export default {
  components: { PostCard },
  props: {
    posts: { type: Array, required: true },
    title: { type: String, required: true }
  }
}
</script>
