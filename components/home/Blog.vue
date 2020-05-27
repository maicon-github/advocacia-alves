<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <prismic-rich-text :field="content" />
      </v-row>
      <v-row>
        <v-col v-for="(post, i) in posts" :key="i" cols="4">
          <BlogPost :post="post" image-size="250px" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-btn color="red" class="mx-auto my-12 white--text" to="/blog">
          Quero aprender mais
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import BlogPost from '../shared/BlogPost'
export default {
  components: { BlogPost },
  props: {
    content: {
      type: Array,
      required: true
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
