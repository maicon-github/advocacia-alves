<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="12">
        <p class="display-1">
          {{ title }}
        </p>
      </v-col>
      <v-col v-show="posts.length == 0" cols="12">
        <p class="text-center">
          Nenhuma postagem encontrada!
        </p>
      </v-col>
      <v-col v-for="(post, i) in posts" :key="i" md="4" cols="12">
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
