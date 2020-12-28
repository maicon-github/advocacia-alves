<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col :cols="size">
        <div class="flex subtitle-2 font-weight-medium mb-5">
          EM DESTAQUE
        </div>
        <div class="flex display-1 font-weight-regular">
          <a :href="`/blog/${id}`">{{ title }}</a>
        </div>
      </v-col>
      <v-col :cols="size">
        <a :href="`/blog/${id}`">
          <img
            :src="image.url"
            width="100%"
            class="m-auto"
            style="display: inline-block;height: 100%;"
          >
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
  },
  computed: {
    size () {
      return this.$vuetify.breakpoint.xs ? '12' : '6'
    }
  }
}
</script>
<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
