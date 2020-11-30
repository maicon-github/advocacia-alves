<template>
  <div :style="style">
    <v-img v-if="$vuetify.breakpoint.smAndDown" :src="post.image.url" :alt="post.image.alt" eager />
    <Post :post="post" :author="author" />
    <Author :data="author" />
    <Newsletter />
    <Relations :relations="relations" />
  </div>
</template>
<script>
import Post from '../../components/blog/Post'
import Author from '../../components/author/Card'
import Relations from '../../components/blog/Relations'
import Newsletter from '../../components/shared/Newsletter'
export default {
  components: { Post, Author, Relations, Newsletter },
  async asyncData ({ $prismic, error, params }) {
    try {
      const post = (await $prismic.api.getByUID('blogpost', params.id))
      const author = (await $prismic.api.getByID(post.data.author.id))
      const relations = (await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'blogpost'),
          $prismic.predicates.at('my.blogpost.type', post.data.type),
          $prismic.predicates.not('document.id', post.id)
        ],
        { pageSize: 3, page: 1, orderings: '[document.last_publication_date desc]' }
      )).results
      return {
        post: {
          createdAt: post.first_publication_date,
          updatedAt: post.last_publication_date,
          uid: post.uid,
          ...post.data
        },
        author: author.data,
        relations: relations.results || []
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  computed: {
    style () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'background-image:url(' + this.post.image.url + '); background-size:contain;'
      } else {
        return ''
      }
    }
  }
}
</script>
