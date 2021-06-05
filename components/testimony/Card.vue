<template>
  <v-card class="pa-4 d-flex flex-column" min-height="450" outlined light>
    <v-icon color="blue accent-1" x-large>
      mdi-format-quote-open
    </v-icon>
    <p class="titext text-center mb-0">
      {{ item.data.text }}
    </p>
    <v-spacer />
    <v-divider />
    <v-rating
      align="center"
      color="yellow darken-2"
      readonly
      length="5"
      size="30"
      :value="item.data.stars"
    />
    <p class="tiperson text-center mb-0">
      {{ item.data.person }}
    </p>
  </v-card>
</template>
<script>
export default {
  props: {
    item: { type: Object, required: true }
  }
}
</script>
