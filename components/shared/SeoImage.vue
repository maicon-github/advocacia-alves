<template>
  <img
    ref="img"
    :src="image.url"
    :alt="image.alt"
    :width="cWidth"
    :height="cHeight"
    :class="`${cssClass}`"
  >
</template>
<script>
export default {
  props: {
    image: { type: Object, required: true },
    width: { type: String, default: () => '100%' },
    height: { type: String, default: () => '100%' },
    cssClass: { type: String, default: () => '' }
  },
  data: () => ({ cWidth: null, cHeight: null }),
  created () {
    this.cWidth = this.width
    this.cHeight = this.height
  },
  mounted () {
    if (!this.$refs.img) {
      return
    }

    const { width, height } = this.$size(this.$refs.img.closest('.img-parent'))

    if (this.cWidth === '100%') {
      this.cWidth = width
    }

    if (this.cHeight === '100%') {
      this.cHeight = height
    }
  }
}
</script>
