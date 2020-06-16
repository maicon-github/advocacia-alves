<template>
  <v-img :src="banner" class="white--text d-flex align-center" />
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
