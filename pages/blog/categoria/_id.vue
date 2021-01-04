<template>
  <div class="mt-12">
    <PageTitle />
    <FeaturedPost v-if="featured != null" :id="featured.uid" :title="featured.data.title" :image="featured.data.image" />
    <PostList :posts="posts" :title="`Postagens da categoria '${$categoryDescription(categoryId)}'`" />
    <Pagination v-show="posts.length > 0" :total="total" :loading="loading" @change="loadPosts" />
    <Newsletter />
  </div>
</template>

<script>
import PostList from '../../../components/blog/PostList'
import PageTitle from '../../../components/blog/PageTitle'
import FeaturedPost from '../../../components/blog/FeaturedPost'
import Newsletter from '../../../components/shared/Newsletter'
import Pagination from '../../../components/shared/Pagination'

export default {
  components: { PostList, PageTitle, FeaturedPost, Newsletter, Pagination },
  async asyncData ({ $prismic, error, params }) {
    try {
      const featuredPost = (await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'blogpost'),
          $prismic.predicates.at('my.blogpost.featured', true),
          $prismic.predicates.at('my.blogpost.type', params.id)
        ],
        { pageSize: 1, page: 1, orderings: '[document.last_publication_date desc]' }
      ))
      const posts = (await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'blogpost'),
          $prismic.predicates.at('my.blogpost.type', params.id)
        ],
        { pageSize: 9, page: 1, orderings: '[document.last_publication_date desc]' }
      ))
      return {
        loading: false,
        posts: posts.results,
        categoryId: params.id,
        total: posts.total_pages,
        featured: featuredPost.results[0] || null
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  methods: {
    async loadPosts (page) {
      this.loading = true

      const posts = (await this.$prismic.api.query(
        [
          this.$prismic.predicates.at('document.type', 'blogpost'),
          this.$prismic.predicates.at('my.blogpost.type', this.$route.params.id)
        ],
        { pageSize: 9, page, orderings: '[document.last_publication_date desc]' }
      ))

      this.loading = false
      this.total = posts.total_pages
      this.posts = page === 1 ? posts.results : [...this.posts, ...posts.results]
    }
  }
}
</script>
