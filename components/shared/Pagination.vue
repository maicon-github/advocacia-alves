<template>
  <div class="text-center">
    <v-btn
      v-show="current < total"
      color="primary"
      :loading="loading"
      @click="load"
    >
      Ver mais
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    total: { type: Number, required: true },
    loading: { type: Boolean, required: true }
  },
  data: () => ({ current: 1 }),
  watch: {
    total () {
      this.current = 1
    }
  },
  methods: {
    load (page) {
      if (this.current < this.total) {
        this.current++
        this.$emit('change', this.current)
      }
    }
  }
}
</script>
