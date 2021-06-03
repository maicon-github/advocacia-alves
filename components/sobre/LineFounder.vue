<template>
  <div>
    <v-row>
      <v-col md="5" cols="12" class="px-8 d-flex">
        <img :src="picture.url" :alt="picture.alt" width="100%" class="my-auto" />
      </v-col>
      <v-col md="7" cols="12" class="pb-0">
        <div class="mx-auto fborder pt-16">
          <h3 class="fcaption1 text-center">
            {{ name }}
          </h3>
        </div>
        <h5 class="fcaption2 text-center py-4 pb-16">
          {{ office }}
        </h5>
        <div class="ftext">
          <prismic-rich-text :field="text1" />
        </div>
      </v-col>
      <v-col class="ftext pt-0" cols="12">
        <prismic-rich-text :field="text2" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    office: { type: String, required: true },
    text1: { type: Array, required: true },
    text2: { type: Array, required: true },
    picture: { type: Object, required: true }
  }
}
</script>
<style scoped>
.fcaption1 {
  color: #3D3D3D;
  font-size: 34px;
  letter-spacing: 0.43px;
  line-height: 41px;
}
.fcaption2 {
  color: #3D3D3D;
  font-size: 20px;
  letter-spacing: 0.25px;
  line-height: 24px;
}
.ftext {
  color: #3D3D3D;
  font-size: 18px;
  line-height: 28px;
}
.fborder {
  width: 230px;
  border-bottom: 3px solid #D6550A;
}
</style>
