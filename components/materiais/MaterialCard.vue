<template>
  <v-card
    max-width="395"
    height="100%"
    :href="`/materiais/${material.uid}`"
    class="pa-4 mx-auto d-block d-flex flex-column"
    hover
    outlined
    light
  >
    <nuxt-img :src="material.data.content_image.url" sizes="sm:200 md:200 lg: 300" class="mx-auto d-block img-cover" />
    <v-card-subtitle class="pa-0 card-subtitle">
      {{ material.data.categoria }}
    </v-card-subtitle>
    <v-card-title class="pa-0 card-title">
      {{ material.data.titulo_material }}
    </v-card-title>
    <prismic-rich-text :field="material.data.resumo_material" />
    <v-spacer></v-spacer>
    <v-card-actions class="justify-end">
      <v-btn outlined>Baixar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: { material: { type: Object, required: true } }
}
</script>
