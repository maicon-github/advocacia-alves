<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="12">
        <p v-show="!loading && materiais.length == 0" class="text-center">
          Nenhuma material encontrado!
        </p>
        <p v-show="loading" class="text-center">
          Carregando!
        </p>
      </v-col>
      <v-col v-for="(material, i) in materiais" :key="i" sm="6" md="4" cols="12">
        <MaterialCard :material="material" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MaterialCard from './MaterialCard'
export default {
  components: { MaterialCard },
  props: {
    loading: { type: Boolean, required: true },
    materiais: { type: Array, required: true }
  }
}
</script>
