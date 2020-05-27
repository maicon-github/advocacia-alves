<template>
  <div class="mt-12 py-12">
    <PageTitle />
    <FeaturedPost :id="uid" :title="title" :image="image" />
    <PostList :posts="posts" />
    <Newsletter />
  </div>
</template>

<script>
import PostList from '../../components/blog/PostList'
import PageTitle from '../../components/blog/PageTitle'
import FeaturedPost from '../../components/blog/FeaturedPost'
import Newsletter from '../../components/shared/Newsletter'

export default {
  layout: 'blog',
  components: { PostList, PageTitle, FeaturedPost, Newsletter },
  async asyncData ({ $prismic, error }) {
    try {
      const featuredPost = (await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'blogpost'),
          $prismic.predicates.at('my.blogpost.featured', true)
        ],
        { pageSize: 1, page: 1, orderings: '[document.last_publication_date desc]' }
      ))
      const posts = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'blogpost'),
        { pageSize: 20, page: 1, orderings: '[document.last_publication_date desc]' }
      ))
      return {
        posts: posts.results,
        ...featuredPost.results[0].data,
        uid: featuredPost.results[0].uid
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  }
}
</script>
