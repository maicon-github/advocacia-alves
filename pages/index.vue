<template>
  <div>
    <MainBanner :title="header_title" :subtitle="header_subtitle" :banner="main_image.url" />
    <Testimonies :title="testimony_title" :testimonies="testimonies" class="mt-12" />
    <Informations :informations="informations" style="background-color: #f6f9fc" />
    <Images :images="media" :title="media_title" class="my-12" />
    <Coverage :title="coverage_title" :coverage="coverage" :banner="coverage_map.url" />
    <Blog :content="blog" :posts="posts" :title="blog_title" class="mt-12 pt-12" />
    <Images :images="payments" :title="payments_title" />
  </div>
</template>

<script>
import Blog from '../components/home/Blog'
import Images from '../components/home/Images'
import Coverage from '../components/home/Coverage'
import MainBanner from '../components/home/MainBanner'
import Testimonies from '../components/home/Testimonies'
import Informations from '../components/home/Informations'

export default {
  components: {
    MainBanner,
    Images,
    Testimonies,
    Informations,
    Coverage,
    Blog
  },
  async asyncData ({ $prismic, error }) {
    try {
      // const fetchRoutes = async (page = 1, routes = []) => {
      //   const response = (await $prismic.api.query(
      //     $prismic.predicates.at('document.type', 'blogpost'),
      //     { pageSize: 100, lang: '*', page: 1 }
      //   ))
      //   console.log(response)
      //   const allRoutes = routes.concat(response.results.map(e => `/blog/${e.uid}`))
      //   if (response.results_size + routes.length < response.total_results_size) {
      //     return fetchRoutes(page + 1, allRoutes)
      //   }
      //   return allRoutes
      // }

      // console.log((await fetchRoutes()))
      const homepage = (await $prismic.api.getSingle('homepage'))
      const posts = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'blogpost'),
        { pageSize: 3, page: 1, orderings: '[document.last_publication_date desc]' }
      ))
      return {
        posts: posts.results,
        ...homepage.data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  }
}
</script>
