<template>
  <div>
    <v-row v-for="(value, i) in items" :key="i" justify="center" align="center">
      <v-col v-if="value.type == 'left'" md="6" cols="12" class="hidden-sm-and-down img-parent">
        <SeoImage :image="value.value_image" css-class="mx-auto pa-4 d-block img-contain" />
      </v-col>
      <v-col md="6" cols="12">
        <p class="sicaption1 text-md-left text-center">
          {{ value.value_title }}
        </p>
        <h2 class="sicaption2 mb-4 text-md-left text-center">
          <v-icon colr="success" class="mb-1">
            mdi-check-circle-outline
          </v-icon>
          {{ value.value_subtitle }}
        </h2>
        <p class="sitext  text-md-left text-center">
          {{ value.value_text }}
        </p>
      </v-col>
      <v-col v-if="value.type == 'right'" md="6" cols="12" class="hidden-sm-and-down img-parent">
        <SeoImage :image="value.value_image" css-class="pa-8 ma-auto d-block img-contain" />
      </v-col>
      <v-col md="6" cols="12" class="hidden-md-and-up img-parent">
        <SeoImage :image="value.value_image" css-class="pa-8 ma-auto mx-auto img-contain d-block" />
      </v-col>
      <v-col cols="12" class="pa-0 d-flex">
        <img v-if="(i === 0 || i === 1)" :src="`/GrayLine-${value.type}.svg`" width="634px" height="185px" class="hidden-sm-and-down mx-auto">
      </v-col>
    </v-row>
  </div>
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
.sicaption1 {
  color: #A3A3A3;
  font-size: 18px;
  line-height: 22px;
}
.sicaption2 {
  color: #3D3D3D;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
}
.sitext {
  color: rgba(0,0,0,0.6);
  font-size: 18px;
  line-height: 28px;
}
</style>
