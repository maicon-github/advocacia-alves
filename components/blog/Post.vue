<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pa-0">
        <div :class="`maxcontent mx-auto white px-4`">
          <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
          <h1 class="ptitle mb-16 mt-8">
            {{ post.title }}
          </h1>
          <prismic-rich-text :field="post.content_head_subtitle" />
          <PostInfo :author="author" :updated-at="post.updatedAt" :created-at="post.createdAt" />
          <img
            :src="post.image.url"
            :alt="post.image.alt"
            width="80%"
            class="ma-auto d-block"
          >
          <div v-for="(slice,i) in post.body" :key="i">
            <prismic-rich-text v-if="slice.slice_type == 'texto'" :field="slice.primary.content" />
            <img v-if="slice.slice_type == 'image'" :src="slice.primary.img.url" width="100%">
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
    post: { type: Object, required: true },
    author: { type: Object, required: true }
  },
  computed: {
    paddingX () {
      return this.$vuetify.breakpoint.mdAndUp ? 'px-12' : 'px-4'
    },
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
<style>
.ptitle {
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.45px;
  line-height: 56px;
}
.maxcontent {
  max-width: 830px;
}
.v-application p {
  font-size: 18px !important;
  margin-bottom: 24px !important;
}
.v-application ul, .v-application ol {
  font-size: 18px !important;
  margin-bottom: 24px !important;
}
</style>
