<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <prismic-rich-text :field="content" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
