<template>
  <v-card
    elevation="6"
    class="rounded-xl img-parent"
    height="100%"
    outlined
    light
  >
    <nuxt-img :src="item.data.image.url" height="144" width="215" class="mx-8 mt-8 mx-auto d-block" fit="inside"/>
    <v-card-title class="aicaption">
      {{ item.data.caption }}
    </v-card-title>
    <v-card-text class="aitext">
      <prismic-rich-text :field="item.data.text" />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
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
