<template>
  <v-app>
    <Header />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/blog/Header'
import Footer from '../components/shared/Footer'
export default {
  components: { Header, Footer }
}
</script>
