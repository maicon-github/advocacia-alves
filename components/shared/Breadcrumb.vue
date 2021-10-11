<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon size="16">
        mdi-chevron-right
      </v-icon>
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
