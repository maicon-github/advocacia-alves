<template>
  <div>
    <Post :post="post" :author="author" />
    <Author :data="author" />
    <Relations :relations="relations" />
    <Newsletter />
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
      )).results || []

      return {
        post: {
          createdAt: post.first_publication_date,
          updatedAt: post.last_publication_date,
          uid: post.uid,
          ...post.data
        },
        author: author.data,
        relations
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.meta_description }
      ],
      link: [
        { rel: 'preload', as: 'image', href: this.post.image.url }
      ]
    }
  }
}
</script>
