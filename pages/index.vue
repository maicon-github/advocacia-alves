<template>
  <div>
    <HeaderSection
      :caption1="hcaption1"
      :caption2="hcaption2"
      :caption3="hcaption3"
      :rcaption1="rcaption1"
      :rcaption2="rcaption2 || ''"
      :ricon="ricon"
      :rvalue="rate_value"
      :fcaption1="fcaption1"
      :fcaption2="fcaption2"
      :fimage="fimage"
    />

    <MainSection
      :caption1="scaption1"
      :caption2="scaption2"
      :caption3="scaption3"
      :items="sitems"
      :image="simage"
    />

    <section class="acontainer mt-16">
      <Award
        :caption1="acaption1"
        :caption2="acaption2"
        :text="atext"
        :awards="awards"
      />
      <Testimony
        :caption1="tcaption1"
        :caption2="tcaption2"
        :caption3="tcaption3"
        :testimonies="testimonies"
      />
    </section>

    <Blog
      :caption1="bcaption1"
      :caption2="bcaption2"
      :caption3="bcaption3"
      :posts="posts"
    />
  </div>
</template>

<script>
import Blog from '../components/home/Blog'
import Award from '../components/home/Award'
import Testimony from '../components/home/Testimony'
import MainSection from '../components/home/MainSection'
import HeaderSection from '../components/home/HeaderSection'
export default {
  components: {
    Blog,
    Testimony,
    Award,
    MainSection,
    HeaderSection
  },
  async asyncData ({ $prismic, error }) {
    try {
      const homepage = (await $prismic.api.getSingle('homepage'))
      const posts = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'blogpost'),
        { pageSize: 3, page: 1, orderings: '[document.last_publication_date desc]' }
      ))
      const awards = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'awards')
      ))
      const testimonies = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'testimony')
      ))
      return {
        ...homepage.data,
        posts: posts.results,
        awards: awards.results,
        testimonies: testimonies.results
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description }
      ],
      link: [
        { rel: 'preload', as: 'image', href: this.fimage.url }
      ]
    }
  }
}
</script>
<style scoped>
.acontainer {
  background-color: #F0F0F0;
}
</style>
