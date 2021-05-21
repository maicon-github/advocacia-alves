<template>
  <div>
    <Caption :text="caption1" />
    <div class="d-flex">
      <v-img :src="icon.url" :alt="icon.alt" max-width="150" contain />
      <div class="rate-value ml-8">
        {{ value }}
      </div>
    </div>
    <div class="rate-text">
      {{ caption2 }}
    </div>
  </div>
</template>
<script>
import Caption from './Caption'
export default {
  components: { Caption },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    value: { type: String, required: true },
    icon: { type: Object, required: true }
  }
}
</script>
<style scoped>
.rate-value {
  color: #3D3D3D;
  font-size: 32px;
  line-height: 71px;
}
.rate-text {
  color: #A3A3A3;
  font-size: 14px;
  line-height: 16px;
}
</style>
