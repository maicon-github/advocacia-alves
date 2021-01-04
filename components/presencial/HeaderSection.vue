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
          color="#f88d4f"
          class="white--text mx-auto my-10"
          href="https://api.whatsapp.com/send?l=pt_BR&phone=5548999565060"
          target="_blank"
        >
          AGENDE A VISITA
        </v-btn>
      </v-col>
      <v-col md="7" sm="12" class="d-flex">
        <v-img eager :src="image.url" :alt="image.alt" class="my-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Caption from '../shared/Caption'
import Breadcrumb from '../shared/Breadcrumb'
export default {
  components: { Caption, Breadcrumb },
  props: {
    caption: { type: String, required: true },
    image: { type: Object, required: true },
    title: { type: String, required: true },
    text: { type: Array, required: true }
  },
  data () {
    return {
      breadCrumbItems: [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Atendimento presencial', disabled: true, href: '/consulta-presencial' }
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
