<template>
  <v-img src="500.jpg" cover class="pt-12" :height="availableHeight" eager>
    <h1 class="display-4 text-center">Erro 500</h1>
    <h3 class="headline text-center grey--text">Por favor tente novamente mais tarde.</h3>
  </v-img>
</template>
<script>
export default {
  computed: {
    availableHeight () {
      if (process.client) {
        return window.innerHeight
      }
      return 0
    }
  }
}
</script>
