<template>
  <v-container>
    <v-row>
      <v-col md="5" sm="12">
        <Caption :text="caption1" />
        <h2 class="acaption2 my-8">
          {{ caption2 }}
        </h2>
        <div class="atext">
          <prismic-rich-text :field="text" />
        </div>
      </v-col>
      <v-col md="7" sm="12" class="px-0">
        <v-slide-group
          :style="negativeMarginSlideGroup"
          show-arrows
        >
          <v-slide-item v-for="item in awards" :key="item.id">
            <v-card
              outlined
              class="mx-4 rounded-xl"
              height="426"
              width="295"
            >
              <v-img
                :src="item.data.image.url"
                :alt="item.data.image.alt"
                height="144"
                class="mx-8 mt-12"
                contain
              />
              <v-card-title class="aicaption">
                {{ item.data.caption }}
              </v-card-title>
              <v-card-text class="aitext">
                <prismic-rich-text :field="item.data.text" />
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    text: { type: Array, required: true },
    awards: { type: Array, required: true }
  },
  computed: {
    negativeMarginSlideGroup () {
      return this.$vuetify.breakpoint.mdAndUp ? 'margin-top: -90px' : ''
    }
  }
}
</script>
<style scoped>
.acaption2 {
  color: #3D3D3D;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}
.atext {
  color: #555;
  font-size: 18px;
  line-height: 28px;
}
.acontainer {
  background-color: #F0F0F0;
}
.aicaption {
  height: 104px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
}
.aitext {
  color: #3D3D3D;
  font-size: 18px;
  line-height: 21px;
}
</style>
