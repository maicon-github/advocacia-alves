<template>
  <v-container class="mb-5">
    <v-row>
      <v-col cols="12">
        <div class="flex display-1 font-weight-bold mb-5 text-center">
          {{ title }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-carousel
        cycle
        height="200"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, index) in testimonies"
          :key="index"
        >
          <div class="px-12 mx-12 text-center">
            <span>{{ item.content }}</span>
            <div class="px-12 mx-12">
              <v-divider class="my-5 blue-grey darken-4 mx-auto" width="300" />
            </div>
            <span>{{ item.name }}</span>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Testimonies',
  props: {
    title: {
      type: String,
      required: true
    },
    testimonies: {
      type: Array,
      required: true
    }
  }
}
</script>
