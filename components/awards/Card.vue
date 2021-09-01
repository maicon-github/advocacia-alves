<template>
  <v-card
    elevation="6"
    class="rounded-xl img-parent"
    height="100%"
    outlined
    light
  >
    <SeoImage :image="item.data.image" height="144px" css-class="mx-8 mt-8 mx-auto d-block" />
    <v-card-title class="aicaption">
      {{ item.data.caption }}
    </v-card-title>
    <v-card-text class="aitext">
      <prismic-rich-text :field="item.data.text" />
    </v-card-text>
  </v-card>
</template>
<script>
import SeoImage from '../shared/SeoImage'
export default {
  components: { SeoImage },
  props: {
    item: { type: Object, required: true }
  }
}
</script>
<style scoped>
.aicaption {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
}
.aitext {
  color: #3D3D3D;
  font-size: 18px;
  line-height: 21px;
}
</style>
