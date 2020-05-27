<template>
  <div class="blue-grey lighten-5 py-12">
    <v-container>
      <v-row>
        <v-col v-for="(item, index) in informations" :key="index" :cols="12/informations.length">
          <prismic-rich-text :field="item.content" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    informations: {
      type: Array,
      required: true
    }
  }
}
</script>
