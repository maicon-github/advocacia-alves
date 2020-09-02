<template>
  <v-app>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
export default {
  components: { Header, Footer }
}
</script>
