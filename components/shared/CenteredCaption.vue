<template>
  <div class="caption1 py-1">
    {{ text }}
  </div>
</template>
<script>
export default {
  props: {
    text: { type: String, required: true }
  }
}
</script>
<style scoped>
.caption1 {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border-bottom: 3px solid #D6550A;
  color: #01408D;
}
</style>
