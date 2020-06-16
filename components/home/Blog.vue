<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <div class="flex display-1 font-weight-bold mb-5 text-center">
          {{ title }}
        </div>
        <prismic-rich-text :field="content" />
      </v-row>
      <v-row>
        <v-col v-for="(post, i) in posts" :key="i" cols="4" class="mt-6">
          <BlogPost :post="post" image-size="250px" />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-btn color="#e57100" class="mx-auto my-12 white--text" to="/blog">
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
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
