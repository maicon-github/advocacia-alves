<template>
  <div class="bg-color mt-16">
    <v-container>
      <v-row class="my-12">
        <v-col cols="12" class="bg-color text-center">
          <p class="newsletter mb-0">
            Newsletter
          </p>
          <div class="border mx-auto">
            <h2 class="title">
              Novo Rumo
            </h2>
          </div>
          <p class="byma mt-2">
            Por Maicon Alves
          </p>
          <p class="text mx-auto pt-5">
            Quer receber  conteúdos sensacionais como este para adiantar a sua aposentadoria ou melhorar o valor dela?
          </p>
          <p class="text2 mx-auto pt-5">
            Cadastre-se na newsletter Novo Rumo. Os seus netos vão te agradecer eternamente por essa decisão!
          </p>
          <v-btn color="#f88d4f" class="white--text text-capitalize mt-6" href="/newsletter">
            Cadastre-se agora
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default { }
</script>
<style scoped>
.bg-color {
  background-color: #D6D6D6;
}
.title {
  color: #3D3D3D;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 41px;
  text-align: center;
}
.newsletter {
  color: #A3A3A3;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.11px;
  line-height: 19px;
  text-align: center;
}
.border {
  width: 120px;
  border-bottom: 2px solid #D6550A;
}
.byma {
  color: #3D3D3D;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 17px;
  text-align: center;
}
.text {
  width: 80%;
  color: #3D3D3D;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
}
.text2 {
  width: 80%;
  color: #3D3D3D;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
}
</style>
