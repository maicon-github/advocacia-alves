<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
        </v-col>
      </v-row>
    </v-container>
    <PageTitle />
    <FeaturedPost v-if="featured != null" :id="featured.uid" :title="featured.data.title" :image="featured.data.image" />
    <PostList :posts="posts" :title="`Postagens da categoria '${categoryName}'`" />
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
import Breadcrumb from '../../../components/shared/Breadcrumb'
export default {
  components: { PostList, PageTitle, FeaturedPost, Newsletter, Pagination, Breadcrumb },
  async asyncData ({ $prismic, error, params, $categoryDescription }) {
    try {
      const categoryName = $categoryDescription(params.id)
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
        categoryName,
        total: posts.total_pages,
        featured: featuredPost.results[0] || null,
        breadCrumbItems: [
          { text: 'Inicio', disabled: false, href: '/' },
          { text: 'Blog', disabled: false, href: '/blog' },
          { text: categoryName, disabled: true, href: `/blog/categoria/${params.id}` }
        ]
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
  },
  head () {
    return {
      link: [
        { rel: 'preload', as: 'image', href: this.featured.data.image.url }
      ]
    }
  }
}
</script>
