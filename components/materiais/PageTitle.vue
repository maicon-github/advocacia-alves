<template>
  <v-container>
    <v-row class="mb-8">
      <div class="mx-auto text-center">
        <CenteredCaption text="MATERIAIS" />
      </div>
    </v-row>
    <v-row class="text-center mb-6">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold">
          Conteúdos gratuítos
        </h1>
        <br>
        <span class="subtitle-1 grey--text">
          Tudo o que você precisa saber sobre previdenciario gratuitamente em um só lugar. E-books, checklists, infográficos, planilhas e muito mais.
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CenteredCaption from '../shared/CenteredCaption'

export default {
  components: { CenteredCaption }
}
</script>
