<template>
  <v-container>
    <v-row class="d-flex justify-center mt-6">
      <v-col cols="12" md="5" class="px-sm-8">
        <v-select
          v-model="formatoSelecionado"
          :items="formatos"
          attach
          chips
          label="Formato"
          multiple
          @change="$emit('changeFormato', formatoSelecionado)"
        ></v-select>
      </v-col>
      <v-col cols="12" md="5" class="px-sm-8">
        <v-select
          v-model="categoriaSelecionado"
          :items="categorias"
          attach
          chips
          label="Categoria"
          multiple
          @change="$emit('changeCategoria', categoriaSelecionado)"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      formatoSelecionado: null,
      categoriaSelecionado: null,
      formatos: [{
        value: 'Checklist',
        text: 'Checklist'
      }, {
        value: 'E-book',
        text: 'E-book'
      }, {
        value: 'Infográfico',
        text: 'Infográfico'
      }, {
        value: 'Lista',
        text: 'Lista'
      }],
      categorias: [{
        value: 'Aposentadoria',
        text: 'Aposentadoria'
      },
      {
        value: 'Auxílio',
        text: 'Auxílio'
      },
      {
        value: 'BPC-LOAS',
        text: 'BPC-LOAS'
      },
      {
        value: 'Dicas',
        text: 'Dicas'
      },
      {
        value: 'Revisão',
        text: 'Revisão'
      },
      {
        value: 'Salário-maternidade',
        text: 'Salário maternidade'
      }]
    }
  }
}
</script>
