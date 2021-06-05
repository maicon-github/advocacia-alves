<template>
  <img
    ref="img"
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
  data: () => ({ width: '100%', height: '' }),

  mounted () {
    const { width, height } = this.$size(this.$refs.img.closest('.img-parent'))

    this.width = width
    this.height = height
  }
}
</script>
