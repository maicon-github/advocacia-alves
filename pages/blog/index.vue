<template>
  <div class="mt-12">
    <PageTitle />
    <FeaturedPost :id="uid" :title="title" :image="image" />
    <PostList :posts="posts" :title="postListTitle" />
    <Pagination v-show="posts.length > 0" :total="total" :loading="loading" @change="loadPosts" />
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
  async asyncData ({ $prismic, error, query }) {
    try {
      const featuredPost = (await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'blogpost'),
          $prismic.predicates.at('my.blogpost.featured', true)
        ],
        { pageSize: 1, page: 1, orderings: '[document.last_publication_date desc]' }
      ))

      return {
        loading: false,
        posts: [],
        total: 0,
        uid: featuredPost.results[0].uid,
        ...featuredPost.results[0].data,
        postListTitle: 'Últimas postagens'
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  watch: {
    async $route (value) {
      await this.loadPosts(1)
    }
  },
  async mounted () {
    await this.loadPosts(1)
  },
  methods: {
    async loadPosts (page) {
      this.loading = true
      const { query } = this.$route
      const hasSearch = (query.s && query.s.length) || false

      const posts = (await this.$prismic.api.query(
        [
          this.$prismic.predicates.at('document.type', 'blogpost'),
          (hasSearch) ? this.$prismic.predicates.fulltext('document', query.s) : null
        ],
        { pageSize: 9, page, orderings: '[document.last_publication_date desc]' }
      ))

      this.loading = false
      this.total = posts.total_pages
      this.posts = page === 1 ? posts.results : [...this.posts, ...posts.results]
      this.postListTitle = hasSearch ? `Resultado da pesquisa: ${posts.total_results_size}` : 'Últimas postagens'
    }
  },
  head () {
    return {
      link: [
        { rel: 'preload', as: 'image', href: this.image.url }
      ]
    }
  }
}
</script>
