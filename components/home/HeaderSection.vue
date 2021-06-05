<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <Caption :text="caption1" />
          <h1 class="caption2 mt-6">
            {{ caption2 }}
          </h1>
          <div class="caption3 mt-6">
            {{ caption3 }}
          </div>
          <div class="hidden-sm-and-down mt-16" />
          <div class="hidden-sm-and-down">
            <GoogleRate
              :caption1="rcaption1"
              :caption2="rcaption2"
              :icon="ricon"
              :value="rvalue"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pb-0 d-flex img-parent">
          <div class="hidden-sm-and-down mt-16" />
          <SeoImage :image="fimage" css-class="ma-auto d-block px-4 img-contain" />
        </v-col>
      </v-row>
      <v-row class="hidden-md-and-up mt-10" align="center" justify="center">
        <GoogleRate
          :caption1="rcaption1"
          :caption2="rcaption2"
          :icon="ricon"
          :value="rvalue"
        />
      </v-row>
    </v-container>
  </section>
</template>
<script>
import Caption from '../shared/Caption'
import GoogleRate from '../shared/GoogleRate'
import SeoImage from '../shared/SeoImage'
export default {
  components: { Caption, GoogleRate, SeoImage },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true },
    rcaption1: { type: String, required: true },
    rcaption2: { type: String, required: true },
    fcaption1: { type: String, required: true },
    fcaption2: { type: String, required: true },
    fimage: { type: Object, required: true },
    ricon: { type: Object, required: true },
    rvalue: { type: String, required: true }
  }
}
</script>
<style scoped>
.caption2 {
  color: #3D3D3D;
  font-size: 48px;
  letter-spacing: 3.43px;
  line-height: 50px;
}
.caption3 {
  color: #3D3D3D;
  font-family: Roboto;
  font-size: 20px;
  line-height: 32px;
}
</style>
