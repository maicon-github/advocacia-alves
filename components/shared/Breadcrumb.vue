<template>
  <v-breadcrumbs :items="items" style="">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
