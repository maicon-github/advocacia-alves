<template>
  <div>
    <v-row class="text-left">
      <v-col cols="12">
        <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
      </v-col>
    </v-row>
    <v-row>
      <div class="mx-auto text-center">
        <CenteredCaption text="SOBRE NÓS" />
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" class="mb-12">
        <h1 class="stitle mb-6 text-center">
          {{ title }}
        </h1>
        <p class="ssubtitle text-center">
          {{ subtitle }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import Breadcrumb from '../shared/Breadcrumb'
import CenteredCaption from '../shared/CenteredCaption'
export default {
  components: { Breadcrumb, CenteredCaption },
  props: {
    caption: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true }
  },
  data () {
    return {
      breadCrumbItems: [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Sobre nós', disabled: true, href: '/sobre' }
      ]
    }
  }
}
</script>
<style scoped>
.stitle {
  color: #3D3D3D;
  font-size: 48px;
  line-height: 58px;
}
.ssubtitle {
  color: #707070;
  font-size: 20px;
  line-height: 24px;
}
</style>
