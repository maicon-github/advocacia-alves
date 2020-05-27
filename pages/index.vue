<template>
  <div>
    <MainBanner :title="header_title" :subtitle="header_subtitle" :banner="main_image.url" />
    <Images :images="images" />
    <Testimonies :title="testimony_title" :testimonies="testimonies" />
    <Informations :informations="informations" />
    <Images :images="media" :title="media_title" />
    <Coverage :title="coverage_title" :coverage="coverage" :banner="coverage_map.url" />
    <RichText :content="payment" class="mt-12" />
    <Blog :content="blog" :posts="posts" />
    <Images :images="payments" :title="payments_title" />
  </div>
</template>

<script>
import Blog from '../components/home/Blog'
import Images from '../components/home/Images'
import RichText from '../components/home/RichText'
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
    RichText,
    Blog
  },
  async asyncData ({ $prismic, error }) {
    try {
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
