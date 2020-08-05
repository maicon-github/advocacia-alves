<template>
  <div class="text-center">
    <v-pagination
      v-model="current"
      :length="total"
      :total-visible="7"
      :disabled="loading"
      @input="begin"
    />
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      current: 1
    }
  },
  methods: {
    begin (page) {
      this.loading = true
      this.$emit('change', page)
    }
  }
}
</script>
