<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="12">
        <p class="display-1">
          {{ title }}
        </p>
      </v-col>
      <v-col v-for="(post, i) in posts" :key="i" :cols="postSize(i)">
        <BlogPost :post="post" :image-size="imageSize(i)" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BlogPost from '../shared/BlogPost'
export default {
  components: { BlogPost },
  props: {
    posts: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    postSize (number) {
      return number === 0 ? '6' : '3'
    },
    imageSize (number) {
      return number === 0 ? '275px' : '200px'
    }
  }
}
</script>
