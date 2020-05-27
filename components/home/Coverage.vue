<template>
  <div class="blue darken-4 white--text d-flex align-center">
    <v-container>
      <v-row>
        <v-col cols="6" class="flex">
          <img src="/logo.png" alt="Advocacia Alves" height="64" class="mb-5">
          <div class="flex display-1 font-weight-regular">
            {{ title }}
          </div>
          <div v-for="(item, index) in coverage" :key="index" class="mt-7">
            <div class="flex display-1 font-weight-regular">
              {{ item.title }}
            </div>
            <div class="flex display-1 font-weight-regular">
              {{ item.subtitle }}
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <v-img :src="banner" contain max-width="100%" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    coverage: {
      type: Array,
      required: true
    },
    banner: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      return 'background-image: url(' + this.banner + ');background-size: contain;background-position: right;'
    }
  }
}
</script>
