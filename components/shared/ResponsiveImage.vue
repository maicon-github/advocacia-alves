<template>
  <img
    :src="image.url"
    :alt="image.alt"
    :width="width"
    :height="height"
    class="ma-auto img-contain d-block"
  >
</template>
<script>
export default {
  props: { image: { type: Object, required: true } },
  data: () => ({ hydrated: false, width: '100%', height: '' }),
  watch: {
    hydrated () {
      let prop = 'laptopl'
      const { width } = this.$vuetify.breakpoint

      if (width === 0) {
        return
      } if (width <= 320) {
        prop = 'mobiles'
      } else if (width <= 375) {
        prop = 'mobilem'
      } else if (width <= 425) {
        prop = 'mobilel'
      } else if (width <= 768) {
        prop = 'tablet'
      } else if (width <= 1024) {
        prop = 'laptop'
      }
      window.console.log(`${prop}-${width}`)
      this.width = this.image[prop].dimensions.width
      this.height = this.image[prop].dimensions.height
    }
  },
  mounted () { this.hydrated = true }
}
</script>
