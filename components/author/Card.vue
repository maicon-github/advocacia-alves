<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-container>
            <v-row>
              <v-col sm="12" md="3">
                <v-avatar size="150" class="my-4">
                  <v-img :src="data.image.url" contain eager />
                </v-avatar>
              </v-col>
              <v-col sm="12" md="9">
                <h5 class="aname" sm="12">
                  {{ data.name }}
                </h5>
                <div class="line my-2" />
                <p class="atitle text-uppercase mb-0 atitle">
                  Sócio fundador
                </p>
                <p class="adegree mt-4">
                  {{ data.degree }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    data: { type: Object, required: true }
  }
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
