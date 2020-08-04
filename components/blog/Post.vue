<template>
  <v-container style="margin-top: 350px;">
    <v-row>
      <v-col cols="10" offset="1" class="white px-12">
        <div class="px-12">
          <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
          <h1 class="display-2">
            {{ post.title }}
          </h1>
          <PostInfo :author="author" :updated-at="post.updatedAt" :created-at="post.createdAt" />
          <div v-for="(slice,i) in post.body" :key="i">
            <prismic-rich-text v-if="slice.slice_type == 'texto'" :field="slice.primary.content" />
            <v-img v-if="slice.slice_type == 'image'" :src="slice.primary.img.url" contain max-width="100%" eager />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Breadcrumb from '../shared/Breadcrumb'
import PostInfo from './PostInfo'
export default {
  components: { PostInfo, Breadcrumb },
  props: {
    post: {
      type: Object,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  },
  computed: {
    breadCrumbItems () {
      return [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Blog', disabled: false, href: '/blog' },
        { text: this.$categoryDescription(this.post.type), disabled: false, href: `/blog/categoria/${this.post.type}` },
        { text: this.post.title, disabled: true, href: `/blog/${this.post.uid}` }
      ]
    }
  }
}
</script>
