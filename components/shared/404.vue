<template>
  <v-row class="d-flex flex-row">
    <v-img src="/404.png" :height="availableHeight" cover eager />
    <div class="pa-12">
      <h1 class="display-2 my-6">
        Ixe...
      </h1>
      <p class="headline">
        As vezes a gente procura, procura, mas não encontra...
      </p>
      <p class="headline">
        Você pode voltar para página inicial ou fazer uma busca em nosso site:
      </p>
      <v-text-field
        v-model="text"
        label="Pesquisar no blog"
        dense
        hide-details
        autofocus
        background-color="white"
        outlined
        :loading="loading"
        @keyup.enter="onEnter"
      />
      <p class="headline">
        Talvez esses links possam te ajudar:
      </p>
    </div>
  </v-row>
</template>
<script>
export default {
  data: () => ({ text: '', loading: false }),
  computed: {
    availableHeight () {
      return process.client ? window.innerHeight : 0
    }
  },
  methods: {
    onEnter () {
      this.loading = true
      if (this.text.length) {
        this.$router.push({ path: '/blog', query: { s: this.text } }, this.endSearch)
      }
    },
    endSearch () {
      this.loading = false
    }
  }
}
</script>
