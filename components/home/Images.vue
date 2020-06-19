<template>
  <v-container>
    <v-row v-if="title != ''">
      <v-col cols="12">
        <div class="flex display-1 font-weight-bold mb-5 text-center">
          {{ title }}
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-row">
      <v-col v-for="(item, index) in images" :key="index" :cols="12/images.length">
        <img :src="item.image.url" width="100%">
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Images',
  props: {
    title: { type: String, default: '' },
    images: { type: Array, required: true }
  }
}
</script>
