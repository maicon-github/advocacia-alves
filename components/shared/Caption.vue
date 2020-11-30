<template>
  <div>
    <div class="caption1">
      {{ text }}
    </div>
    <div class="line mt-3" />
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
.line {
  box-sizing: border-box;
  height: 3px;
  width: 138px;
  background-color: #D6550A;
}
.caption1 {
  color: #0257C0;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
}
</style>
