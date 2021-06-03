<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6">
        <div class="flex subtitle-2 font-weight-medium mb-5">
          EM DESTAQUE
        </div>
        <div class="flex display-1 font-weight-regular">
          <a :href="`/blog/${id}`" class="text-decoration-none">
            {{ title }}
          </a>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <a :href="`/blog/${id}`">
          <img
            :src="image.url"
            width="100%"
            class="ma-auto"
            max-height="266px"
          />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true },
    image: { type: Object, required: true },
    id: { type: String, required: true }
  }
}
</script>
<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
