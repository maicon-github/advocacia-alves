<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4 d-xs-flex flex-xs-column d-md-flex flex-md-row">
          <img :src="data.image.url" :alt="data.image.alt" width="150px" height="150px" class="d-block ma-auto">
          <div class="px-4 pt-4">
            <h5 class="aname text-center text-md-left" sm="12">
              {{ data.name }}
            </h5>
            <div class="line my-2 mx-auto mx-md-0 d-block" />
            <div class="atitle text-uppercase mb-0 atitle text-center text-md-left">
              Sócio-fundador
            </div>
            <div class="adegree mt-4">
              {{ data.degree }}
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: { data: { type: Object, required: true } }
}
</script>
<style scoped>
.aname {
  color: #3D3D3D;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.14px;
  line-height: 24px;
}
.line {
  box-sizing: border-box;
  height: 2px;
  width: 100px;
  background-color: #D6550A;
}
.adegree {
  color: rgba(0,0,0,0.87);
  font-size: 12px;
  letter-spacing: 0.09px;
  line-height: 14px;
}
.atitle {
  color: #01408D;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.09px;
  line-height: 15px;
}
</style>
