<template>
  <v-row>
    <v-col md="6" sm="12" :style="rightStyle" class="d-flex flex-column pa-16 text-left">
      <v-avatar color="primary" size="60" class="mt-10">
        <v-icon color="white" size="45">
          {{ icon }}
        </v-icon>
      </v-avatar>
      <h3 class="caption1 mt-8">
        {{ caption1 }}
      </h3>
      <div class="text text-left mt-4">
        {{ text }}
      </div>
    </v-col>
    <v-col md="6" sm="12" :style="leftStyle" class="d-flex flex-column text-center pa-16">
      <h3 class="caption2 mx-auto">
        {{ caption2 }}
      </h3>
      <v-btn
        color="#f88d4f"
        class="white--text mx-auto mt-16"
        href="https://api.whatsapp.com/send?l=pt_BR&phone=5548920026917"
        target="_blank"
      >
        Quero atendimento à distância
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    color1: { type: String, required: true },
    color2: { type: String, required: true },
    text: { type: String, required: true },
    icon: { type: String, required: true }
  },
  computed: {
    rightStyle () {
      return `background-color: ${this.color1};min-height:472px;`
    },
    leftStyle () {
      return `background-color: ${this.color2};min-height:472px;`
    }
  }
}
</script>
<style scoped>
.caption1 {
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 3.43px;
  line-height: 50px;
}
.caption2 {
  color: #F0F0F0;
  font-size: 48px;
  letter-spacing: 3.43px;
  line-height: 50px;
}
.text {
  color: rgba(0,0,0,0.87);
  font-size: 18px;
  line-height: 32px;
}
</style>
