<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" class="mb-12">
          <h1 class="display-2 font-weight-bold mb-6 text-center mt-12" style="background-image:url(/arrow-blue.png);background-size: contain;">
            {{ title }}
          </h1>
          <h5 class="headline text--secondary text-center">
            {{ subtitle }}
          </h5>
        </v-col>
      </v-row>
      <v-row v-for="(value, i) in values" :key="i" align="center" justify="center">
        <v-col v-if="value.type == 'left'" cols="6" align="center" justify="center">
          <v-img :src="value.value_image.url" contain max-width="80%" eager />
        </v-col>
        <v-col cols="6">
          <p class="title font-weight-medium text--secondary">
            {{ value.value_title }}
          </p>
          <p class="headline">
            {{ value.value_subtitle }}
          </p>
          <p class="title text--secondary">
            {{ value.value_text }}
          </p>
        </v-col>
        <v-col v-if="value.type == 'right'" cols="6" align="center" justify="center">
          <v-img :src="value.value_image.url" contain max-width="80%" eager />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="mx-auto text-center">
          <p class="title font-weight-medium text--secondary">
            {{ way_title }}
          </p>
          <h2 class="display-3 font-weight-regular">
            {{ way_subtitle }}
          </h2>
          <v-img
            width="40%"
            class="mx-auto"
            src="/detail1.png"
            eager
          />
        </v-col>
        <v-col v-for="(w, i) in way" :key="i" cols="3">
          <!-- <v-img v-if="i == 4" width="70%" src="/detail2.png" eager />
          <v-img v-else-if="i == 5" width="70%" src="/arrow-orange.png" eager /> -->
          <v-card class="mx-auto" min-height="450">
            <div align="center">
              <v-img width="70%" :src="w.way_image.url" eager />
            </div>
            <v-card-text>
              <p class="headline black--text font-weight-bold text-center">
                {{ w.way_title }}
              </p>
              <p class="text--secondary subtitle-1 font-weight-bold">
                {{ w.way_text }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="background-image:url(/detail3.png);">
          <h4 class="font-weight-bold text-center mt-12 mb-0 mt-16 pt-16 text-h4 ">
            {{ origin_title }}
          </h4>
          <h5 class="subtitle-1 text--secondary text-center mb-16 font-weight-bold">
            {{ origin_subtitle }}
          </h5>
          <div class="text--secondary subtitle-1 font-weight-bold">
            <prismic-rich-text :field="origin_text" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12 d-inline">
          <div class="float-left px-16 width-40">
            <v-img :src="founder_photo.url" :alt="founder_photo.alt" eager width="100%" />
          </div>
          <h4 class="font-weight-bold text-center mt-12 mb-0 text-h4">
            {{ founder_name }}
          </h4>
          <h5 class="subtitle-1 text--secondary text-center mb-6  font-weight-bold">
            {{ founder_office }}
          </h5>
          <div class="text--secondary subtitle-1 font-weight-bold">
            <prismic-rich-text :field="founder_presentation" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const sobre = (await $prismic.api.getSingle('sobre'))
      return {
        ...sobre.data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  }
}
</script>
<style scoped>
.width-40 {
  width: 45%;
}
</style>
