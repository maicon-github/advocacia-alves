<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
      </v-col>
      <v-col md="5" sm="12" class="d-flex flex-column">
        <Caption :text="caption" />
        <h1 class="htitle mt-6">
          {{ title }}
        </h1>
        <div class="htext mt-10">
          <prismic-rich-text :field="text" />
        </div>
        <v-btn
          color="#4085c6"
          class="white--text mx-auto my-10"
          href="https://api.whatsapp.com/send?l=pt_BR&phone=5548920026917"
          target="_blank"
        >
          {{ btnText }}
        </v-btn>
      </v-col>
      <v-col md="7" sm="12" class="d-flex img-parent">
        <SeoImage :image="image" css-class="ma-auto d-block img-contain pa-8" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SeoImage from '../shared/SeoImage'
import Caption from '../shared/Caption'
import Breadcrumb from '../shared/Breadcrumb'
export default {
  components: { Caption, Breadcrumb, SeoImage },
  props: {
    caption: { type: String, required: true },
    image: { type: Object, required: true },
    title: { type: String, required: true },
    text: { type: Array, required: true },
    btnText: { type: String, required: true }
  },
  data () {
    return {
      breadCrumbItems: [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Atendimento à distância', disabled: true, href: '/consulta-a-distancia' }
      ]
    }
  }
}
</script>
<style scoped>
.htitle {
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 3.43px;
  line-height: 50px;
}
.htext{
  color: #3D3D3D;
  font-size: 18px;
  line-height: 32px;
}
</style>
