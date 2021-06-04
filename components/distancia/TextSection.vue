<template>
  <v-container :class="`mb-16 pb-16 ${styleMargins}`">
    <v-row :class="styleMargins">
      <v-col cols="12" class="mt-6 d-flex">
        <img src="/gray-line.svg" width="300px" class="ma-auto">
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-avatar color="primary" size="60" class="mx-auto">
          <v-icon color="white" size="45">
            {{ icon }}
          </v-icon>
        </v-avatar>
      </v-col>
      <v-col cols="12">
        <h2 class="stitle text-center py-10">
          {{ caption }}
        </h2>
        <div class="stext text-center">
          <prismic-rich-text :field="text" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    icon: { type: String, required: true },
    text: { type: Array, required: true },
    caption: { type: String, required: true }
  },
  computed: {
    styleMargins () {
      return this.$vuetify.breakpoint.mdAndUp ? 'px-16' : ''
    }
  }
}
</script>
<style scoped>
.stitle {
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 3.43px;
  line-height: 50px;
}
.stext {
  color: rgba(0,0,0,0.87);
  font-size: 18px;
  line-height: 32px;
}
</style>
