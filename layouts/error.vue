<template>
  <v-app>
    <Error404 v-if="error.statusCode === 404" />
    <Error500 v-else />
  </v-app>
</template>

<script>
import Error404 from '../components/shared/404'
import Error500 from '../components/shared/500'
export default {
  layout: 'blank',
  components: { Error404, Error500 },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return { title: this.error.title }
  }
}
</script>
