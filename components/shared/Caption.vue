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
  props: { text: { type: String, required: true } }
}
</script>
<style scoped>
.line {
  box-sizing: border-box;
  height: 3px;
  width: 138px;
  background-color: #044486;
}
.caption1 {
  color: #3d3d3d;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
}
</style>
