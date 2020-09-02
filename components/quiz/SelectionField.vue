<template>
  <div>
    <label :for="id" class="title">{{ label }}</label>
    <v-list
      color="#0191D2"
      width="50%"
      dark
      nav
      dense
    >
      <v-list-item-group
        v-model="selected"
        active-class="selected"
        @change="onChange"
      >
        <v-list-item v-for="(option, i) in options" :key="i">
          <v-list-item-title :value="i">
            {{ option.text }}
          </v-list-item-title>
          <v-icon v-show="option.value == selected" dense left>
            mdi-check
          </v-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    previous: { type: Number, default: -1 },
    id: { type: String, required: true },
    label: { type: String, required: true },
    options: { type: Array, required: true }
  },
  data: () => ({ selected: null }),
  methods: {
    onChange (value) {
      const option = this.options[value]
      this.$emit('response', option.value, option.next)
    }
  }
}
</script>
<style scoped>
label.title {
  cursor: pointer;
}
.selected {
  border: 1px solid white !important;;
}
</style>
