<template>
  <div>
    <v-row>
      <v-col cols="12" class="mt-16">
        <img src="/gray-line.svg" width="300px" class="ma-auto d-block" />
        <div class="ocaption1 text-center mt-6">
          SOBRE O FUNDADOR
        </div>
        <h2 class="ocaption2 text-center mt-3">
          {{ title }}
        </h2>
        <div class="ocaption3 text-center mt-2 mb-16">
          {{ subtitle }}
        </div>
        <div class="otext">
          <prismic-rich-text :field="text" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    text: { type: Array, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true }
  }
}
</script>
<style scoped>
.ocaption1 {
  color: #0257C0;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
}
.ocaption2 {
  color: #3D3D3D;
  font-size: 48px;
  line-height: 58px;
}
.ocaption3 {
  color: #575757;
  font-size: 20px;
  line-height: 24px;
}
.otext {
  color: #3D3D3D;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0.17px;
  line-height: 28px;
}
</style>
