<template>
  <v-container>
    <v-row class="mb-4">
      <div class="mx-auto text-center">
        <div class="caption1 py-1">
          IMPRENSA
        </div>
      </div>
    </v-row>
    <v-row class="text-center mb-2">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold">
          <prismic-rich-text :field="imprensa.header_title" />
        </h1>
        <br>
        <span class="subtitle-1 grey--text">
          <prismic-rich-text :field="imprensa.subtitle_head" />
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: { imprensa: { type: Object, required: true } }
}
</script>

<style scoped>
.caption1 {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border-bottom: 3px solid #044486;
  color: #000000;
}
</style>
