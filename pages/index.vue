<template>
  <div>
    <!-- header -->
    <div class="blue darken-4 white--text mt-12 py-12 ">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="flex display-2 font-weight-regular mb-5">
              {{ data["header_title"] }}
            </div>
            <div class="flex title font-weight-regular">
              {{ data["header_subtitle"] }}
            </div>
          </v-col>
          <v-col cols="6" />
        </v-row>
      </v-container>
    </div>
    <v-container>
      <!-- images -->
      <v-row>
        <v-col v-for="(item, index) in data.images" :key="index" :cols="12/data.images.length">
          <v-img contain :src="item.image.url" width="200" />
        </v-col>
      </v-row>
      <!-- testimonies -->
      <v-row class="mt-12">
        <v-col cols="12">
          <div class="flex display-1 font-weight-bold mb-5 text-center">
            {{ data["testimony_title"] }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, index) in data.testimonies" :key="index" :cols="12/data.testimonies.length" class="text-center ">
          <span>{{ item.content }}</span>
          <div class="px-12 mx-12">
            <v-divider class="my-5 blue-grey darken-4" />
          </div>
          <span>{{ item.name }}</span>
        </v-col>
      </v-row>
      <!-- informations -->
    </v-container>
    <div class="blue-grey lighten-5 my-12 py-12">
      <v-container>
        <v-row>
          <v-col v-for="(item, index) in data.informations" :key="index" :cols="12/data.informations.length">
            <prismic-rich-text :field="item.content" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- midias -->
    <v-container class="my-12 py-12">
      <v-row>
        <v-col cols="12">
          <div class="flex display-1 font-weight-bold mb-5 text-center">
            {{ data["media_title"] }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, index) in data.media" :key="index" :cols="12/data.media.length">
          <v-img contain :src="item.image.url" width="200" />
        </v-col>
      </v-row>
    </v-container>
    <!-- coverage -->
    <div class="blue darken-4 lighten-5 white--text">
      <v-container>
        <v-col cols="6" class="flex">
          <img src="/logo.png" alt="Advocacia Alves" height="64" class="mb-5">
          <div class="flex display-1 font-weight-regular">
            {{ data["coverage_title"] }}
          </div>
          <div v-for="(item, index) in data.coverage" :key="index" class="mt-7">
            <div class="flex display-1 font-weight-regular">
              {{ item.title }}
            </div>
            <div class="flex display-1 font-weight-regular">
              {{ item.subtitle }}
            </div>
          </div>
        </v-col>
      </v-container>
    </div>
    <v-container class="text-center">
      <!-- payment -->
      <v-row class="my-12">
        <v-col cols="12">
          <prismic-rich-text :field="data.payment" />
        </v-col>
      </v-row>
      <!-- blog -->
      <v-row class="my-12">
        <v-col cols="12">
          <prismic-rich-text :field="data.blog" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  async asyncData ({ $prismic, error }) {
    try {
      const homepage = (await $prismic.api.getSingle('homepage'))
      console.log(homepage)
      return homepage
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
