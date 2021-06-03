<template>
  <v-container>
    <v-row v-for="(item, i) in items" :key="i" class="mt-10">
      <v-col v-if="!item.position && !$vuetify.breakpoint.smAndDown" md="6" sm="12" class="px-8 d-flex">
        <img eager :src="item.image.url" :alt="item.image.alt" class="my-auto" width="100%"/>
      </v-col>
      <v-col md="6" cols="12">
        <h2 :class="`scaption ${centerText}`">
          {{ item.caption }}
        </h2>
        <div :class="`stext mt-8 ${centerText}`">
          <prismic-rich-text :field="item.text" class="sitext" />
        </div>
      </v-col>
      <v-col v-if="item.position || $vuetify.breakpoint.smAndDown" md="6" cols="12" class="px-8 d-flex">
        <img :src="item.image.url" :alt="item.image.alt" class="my-auto" width="100%"/>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" class="my-8 py-16">
        &nbsp;
      </v-col>
    </v-row>
  </v-container>
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
  }
}
</script>
<style scoped>
.scaption {
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 3.43px;
  line-height: 50px
}
.stext {
  font-size: 18px;
  line-height: 32px;
  color: rgba(0,0,0,0.87);
}
</style>
