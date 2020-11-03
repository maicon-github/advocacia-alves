<template>
  <v-app>
    <v-container>
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
      <v-row v-for="(value, i) in values" :key="i" align="center" justify="center">
        <v-col v-if="value.type == 'left'" cols="6" align="center" justify="center">
          <v-img :src="value.value_image.url" contain max-width="80%" eager />
        </v-col>
        <v-col cols="6">
          <p class="sicaption1">
            {{ value.value_title }}
          </p>
          <h2 class="sicaption2 mb-4">
            {{ value.value_subtitle }}
          </h2>
          <p class="sitext">
            {{ value.value_text }}
          </p>
        </v-col>
        <v-col v-if="value.type == 'right'" cols="6" align="center" justify="center">
          <v-img :src="value.value_image.url" contain max-width="80%" eager />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="text-center">
          <v-row>
            <div class="mx-auto text-center">
              <CenteredCaption text="MISSÃO, VISÃO E VALORES" />
            </div>
          </v-row>
          <h2 class="swtitle mx-auto py-12">
            {{ way_subtitle }}
          </h2>
          <p class="swsubtitle">
            {{ way_title }}
          </p>
        </v-col>
        <v-col v-for="(w, i) in way" :key="i" cols="3">
          <v-card class="mx-auto rounded-xl" min-height="431">
            <div align="center">
              <v-img width="70%" :src="w.way_image.url" eager />
            </div>
            <v-card-text>
              <p class="waytitle">
                {{ w.way_title }}
              </p>
              <p class="waytext">
                {{ w.way_text }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="mt-16">
          <v-img src="/gray-line.svg" width="300px" class="ma-auto" />
          <div class="ocaption1 text-center mt-6">
            SOBRE O FUNDADOR
          </div>
          <h2 class="ocaption2 text-center mt-3">
            {{ origin_title }}
          </h2>
          <div class="ocaption3 text-center mt-2 mb-16">
            {{ origin_subtitle }}
          </div>
          <div class="otext">
            <prismic-rich-text :field="origin_text" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="5" sm="12" class="px-8">
          <v-img :src="founder_photo.url" :alt="founder_photo.alt" eager width="100%" />
        </v-col>
        <v-col md="7" sm="12" class="pb-0">
          <div class="mx-auto fborder pt-16">
            <h3 class="fcaption1 text-center">
              {{ founder_name }}
            </h3>
          </div>
          <h5 class="fcaption2 text-center py-4 pb-16">
            {{ founder_office }}
          </h5>
          <div class="ftext">
            <prismic-rich-text :field="founder_presentation" />
          </div>
        </v-col>
        <v-col class="ftext pt-0" cols="12">
          <prismic-rich-text :field="founder_presentation2" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Breadcrumb from '../components/shared/Breadcrumb'
import CenteredCaption from '../components/shared/CenteredCaption'
export default {
  components: { CenteredCaption, Breadcrumb },
  async asyncData ({ $prismic, error }) {
    try {
      const sobre = (await $prismic.api.getSingle('sobre'))
      return {
        ...sobre.data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  computed: {
    breadCrumbItems () {
      return [
        { text: 'Inicio', disabled: false, href: '/' },
        { text: 'Sobre nós', disabled: true, href: '/sobre' }
      ]
    }
  }
}
</script>
<style scoped>
.width-40 {
  width: 45%;
}
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
  font-family: Roboto;
  font-size: 18px;
  line-height: 28px;
}
.swtitle {
  width: 253px;
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-align: center;
}
.swsubtitle {
  color: #707070;
  font-size: 20px;
  line-height: 24px;
}
.waytext {
  color: #3D3D3D;
  font-size: 16px;
  line-height: 19px;
}
.waytitle {
  color: #3D3D3D;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.45px;
  line-height: 44px;
}
.ocaption1 {
  color: #0257C0;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
}
.ocaption2 {
  color: #3D3D3D;
  font-size: 48px;
  line-height: 58px;
}
.ocaption3 {
  color: #575757;
  font-size: 20px;
  line-height: 24px;
}
.otext {
  color: #3D3D3D;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0.17px;
  line-height: 28px;
}
.fcaption1 {
  color: #3D3D3D;
  font-size: 34px;
  letter-spacing: 0.43px;
  line-height: 41px;
}
.fcaption2 {
  color: #3D3D3D;
  font-size: 20px;
  letter-spacing: 0.25px;
  line-height: 24px;
}
.ftext {
  color: #3D3D3D;
  font-size: 18px;
  line-height: 28px;
}
.fborder {
  width: 230px;
  border-bottom: 3px solid #D6550A;
}
</style>
