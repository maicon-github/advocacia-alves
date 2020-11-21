<template>
  <div>
    <v-row v-for="(value, i) in items" :key="i" align="center" justify="center">
      <v-col v-if="value.type == 'left' && !$vuetify.breakpoint.smAndDown" md="6" xs="12" align="center" justify="center">
        <v-img :src="value.value_image.url" contain max-width="80%" eager />
      </v-col>
      <v-col md="6" xs="12">
        <p :class="`sicaption1 ${centerText}`">
          {{ value.value_title }}
        </p>
        <h2 :class="`sicaption2 mb-4  ${centerText}`">
          <v-icon color="success" class="mb-1">
            mdi-check-circle-outline
          </v-icon>
          {{ value.value_subtitle }}
        </h2>
        <p :class="`sitext ${centerText}`">
          {{ value.value_text }}
        </p>
      </v-col>
      <v-col v-if="value.type == 'right' || $vuetify.breakpoint.smAndDown" md="6" xs="12" align="center" justify="center">
        <v-img :src="value.value_image.url" contain max-width="80%" eager class="my-12" />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-img v-if="showGrayLineImg(i)" :src="grayLineImg(i)" contain max-width="55%" class="ml-4" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    items: { type: Array, required: true }
  },
  computed: {
    centerText () {
      return this.$vuetify.breakpoint.smAndDown ? 'text-center' : ''
    }
  },
  methods: {
    showGrayLineImg (i) {
      return (i === 0 || i === 1) && this.$vuetify.breakpoint.mdAndUp
    },
    grayLineImg (i) {
      if (i === 0) { return '/GrayLineUpDown.svg' }

      return '/GrayLineDownUp.svg'
    }
  }
}
</script>
<style scoped>
.sicaption1 {
  color: #A3A3A3;
  font-size: 18px;
  line-height: 22px;
}
.sicaption2 {
  color: #3D3D3D;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
}
.sitext {
  color: rgba(0,0,0,0.6);
  font-size: 18px;
  line-height: 28px;
}
</style>
