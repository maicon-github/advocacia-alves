<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="12">
        <p v-show="!loading && pautas.length == 0" class="text-center">
          Nenhuma pauta encontrado!
        </p>
        <p v-show="loading" class="text-center">
          Carregando!
        </p>
      </v-col>
      <v-col v-for="(pauta, i) in pautas" :key="i" cols="10" class="mx-auto">
        <ImprensaCard :pauta="pauta" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ImprensaCard from './ImprensaCard'
export default {
  components: { ImprensaCard },
  props: {
    loading: { type: Boolean, required: true },
    pautas: { type: Array, required: true }
  }
}
</script>
