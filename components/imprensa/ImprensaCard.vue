<template>
  <v-card
    class="pa-4 mx-auto d-block d-flex flex-column"
    hover
    outlined
    light
    @click="open"
  >
    <v-card-subtitle class="pa-0 card-subtitle categoria text-uppercase">
      {{ pauta.data.release_type }}
    </v-card-subtitle>
    <prismic-rich-text class="mt-4" :field="pauta.data.titulo_do_release" />
    <div class="mt-4 text--disabled subtitle-1">
      {{ new Date(pauta.data.publication_date).toLocaleDateString() }}
    </div>
    <v-spacer></v-spacer>
    <v-card-actions class="justify-center">
      <v-btn color="#4085c6" class="white--text">Abrir</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: { pauta: { type: Object, required: true } },
  methods: {
    open () {
      window.open(this.pauta.data.release_link.url, '_blank').focus()
    }
  }
}
</script>

<style scoped>
  .categoria {
    color: #044486 !important;
  }
</style>
