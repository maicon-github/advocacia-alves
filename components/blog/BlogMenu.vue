<template>
  <v-menu open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        href="/blog"
        class="my-auto"
        v-bind="attrs"
        small
        text
        v-on="on"
      >
        Blog
        <v-icon dense>
          mdi-menu-down
        </v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item key="1" href="/blog/categoria/aposentadoria">
        <v-list-item-title>Aposentadoria</v-list-item-title>
      </v-list-item>
      <v-list-item key="2" href="/blog/categoria/auxilio">
        <v-list-item-title>Auxílio</v-list-item-title>
      </v-list-item>
      <v-list-item key="3" href="/blog/categoria/bpc-loas">
        <v-list-item-title>BPC - LOAS</v-list-item-title>
      </v-list-item>
      <v-list-item key="4" href="/blog/categoria/dica">
        <v-list-item-title>Dicas</v-list-item-title>
      </v-list-item>
      <v-list-item key="5" href="/blog/categoria/revisao">
        <v-list-item-title>Revisão</v-list-item-title>
      </v-list-item>
      <v-list-item key="6" href="/blog/categoria/salario-maternidade">
        <v-list-item-title>Salário maternidade</v-list-item-title>
      </v-list-item>
      <v-list-item key="7" href="/blog/categoria/pensao">
        <v-list-item-title>Pensão</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  mounted () {
    this.$emit('mounted')
  }
}
</script>
