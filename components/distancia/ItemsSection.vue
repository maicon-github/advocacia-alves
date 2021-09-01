<template>
  <v-container>
    <v-row v-for="(item, i) in items" :key="i" class="mt-10">
      <v-col v-if="!item.position" md="6" sm="12" class="hidden-sm-and-down px-8 img-parent">
        <SeoImage :image="item.image" css-class="ma-auto d-block img-contain" />
      </v-col>
      <v-col md="6" cols="12">
        <h2 class="scaption text-center text-md-left">
          {{ item.caption }}
        </h2>
        <div class="stext mt-8 text-center text-md-left">
          <prismic-rich-text :field="item.text" class="sitext" />
        </div>
      </v-col>
      <v-col v-if="item.position" md="6" cols="12" class="hidden-sm-and-down px-8 img-parent">
        <SeoImage :image="item.image" css-class="ma-auto d-block img-contain" />
      </v-col>
      <v-col md="6" cols="12" class="hidden-md-and-up px-8 img-parent">
        <SeoImage :image="item.image" css-class="ma-auto d-block img-contain" />
      </v-col>
      <v-col cols="12" class="my-8 py-16 hidden-sm-and-down">
        &nbsp;
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SeoImage from '../shared/SeoImage'
export default {
  components: { SeoImage },
  props: {
    items: { type: Array, required: true }
  }
}
</script>
<style scoped>
.scaption {
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 3.43px;
  line-height: 50px
}
.stext {
  font-size: 18px;
  line-height: 32px;
  color: rgba(0,0,0,0.87);
}
</style>
