<template>
  <div>
    <label :for="id" class="title">{{ label }}</label>
    <v-text-field
      :id="id"
      v-mask="['(##) ####-####', '(##) #####-####']"
      :name="id"
      label="Responda aqui"
      :rules="rules"
      single-line
      dark
      @input="onInput"
    />
  </div>
</template>
<script>
export default {
  props: {
    next: { type: Number, default: -1 },
    id: { type: String, required: true },
    label: { type: String, required: true },
    rules: { type: Array, required: true }
  },
  methods: {
    onInput (value) {
      this.$emit('response', value, this.next)
    }
  }
}
</script>
<style scoped>
label.title {
    cursor: pointer;
}
</style>
