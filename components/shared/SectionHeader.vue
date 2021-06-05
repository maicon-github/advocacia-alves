<template>
  <section>
    <v-container>
      <v-row>
        <v-col sm="12" class="mt-16 img-parent">
          <SeoImage :image="{ url: '/gray-line.svg', alt: 'Espaçador' }" width="360px" height="26px" css-class="ma-auto d-block img-cover" />
          <div class="scaption1 text-center mt-6">
            {{ caption1 }}
          </div>
          <h2 class="scaption2 text-center mt-3">
            {{ caption2 }}
          </h2>
          <div class="scaption3 text-center mt-2">
            {{ caption3 }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import SeoImage from './SeoImage'
export default {
  components: { SeoImage },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true }
  }
}
</script>
<style scoped>
.scaption1 {
  color: #01408D;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
}
.scaption2 {
  color: #000;
  font-size: 36px;
  line-height: 44px;

  color: #3D3D3D;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
}
.scaption3 {
  color: #707070;
  font-size: 20px;
  line-height: 32px;
}
</style>
