<template>
  <div class="text-center">
    <v-btn
      v-show="current != total"
      color="primary"
      :loading="loading"
      @click="load"
    >
      Ver mais
    </v-btn>
    <!-- <v-pagination
      v-model="current"
      :length="total"
      :total-visible="9"
      :disabled="loading"
      @input="begin"
    /> -->
  </div>
</template>
<script>
export default {
  props: {
    total: { type: Number, required: true },
    loading: { type: Boolean, required: true }
  },
  data: () => ({ current: 1 }),
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
