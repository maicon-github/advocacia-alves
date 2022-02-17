<template>
  <v-container class="d-block align-center">
    <v-col cols="10" class="mx-auto">
      <v-card height="100%" outlined color="#F0F0F0" class="elevation-2">
        <v-row class="ma-2">
          <v-col md="6" sm="12" class="px-6">
            <prismic-rich-text :field="imprensa.content" />
          </v-col>
          <v-col md="6" sm="12" class="px-6">
            <v-icon x-large :color="imprensa.icon_color">
              mdi-{{ imprensa.icon }}
            </v-icon>
            <prismic-rich-text :field="imprensa.right_colum" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: { imprensa: { type: Object, required: true } }
}
</script>
