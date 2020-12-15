<template>
  <v-menu offset-y bottom left :close-on-content-click="false" :close-on-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        class="my-auto"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </template>
    <v-card class="pa-4 pb-2" width="300px">
      <v-text-field label="Pesquisar no blog" dense hide-details autofocus />
    </v-card>
  </v-menu>
</template>
<script>
export default {
  mounted () {
    this.$emit('mounted')
  }
}
</script>
