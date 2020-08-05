<template>
  <div class="mt-12">
    <PageTitle />
    <FeaturedPost :id="uid" :title="title" :image="image" />
    <PostList :posts="posts" title="Últimas postagens" />
    <Pagination :total="total" :loading="loading" @change="loadMorePosts" />
    <Newsletter />
  </div>
</template>

<script>
import PostList from '../../components/blog/PostList'
import PageTitle from '../../components/blog/PageTitle'
import FeaturedPost from '../../components/blog/FeaturedPost'
import Newsletter from '../../components/shared/Newsletter'
import Pagination from '../../components/shared/Pagination'

export default {
  components: { PostList, PageTitle, FeaturedPost, Newsletter, Pagination },
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
        { pageSize: 7, page: 1, orderings: '[document.last_publication_date desc]' }
      ))
      return {
        loading: false,
        posts: posts.results,
        total: posts.total_pages,
        uid: featuredPost.results[0].uid,
        ...featuredPost.results[0].data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  methods: {
    async loadMorePosts (page) {
      const posts = (await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'blogpost'),
        { pageSize: 7, page, orderings: '[document.last_publication_date desc]' }
      ))
      this.loading = false
      this.posts = posts.results
      this.total = posts.total_pages
    }
  }
}
</script>
