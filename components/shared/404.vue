<template>
  <v-row class="d-flex flex-row">
    <v-img src="404.jpg" :height="availableHeight" cover />
    <div class="pa-12 brown  lighten-5">
      <h1 class="display-2 my-6">
        Ixe...
      </h1>
      <p class="headline">
        As vezes a gente procura, procura, mas não encontra...
      </p>
      <p class="headline">
        Você pode voltar para página inicial ou fazer uma busca em nosso site:
      </p>
      <v-text-field label="Digite a sua busca..." background-color="white" outlined>
        <v-icon slot="append">
          mdi-magnify
        </v-icon>
      </v-text-field>
      <p class="headline">
        Talvez esses links possam te ajudar:
      </p>
    </div>
  </v-row>
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
