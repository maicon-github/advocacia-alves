<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <Caption :text="caption1" />
        <h2 class="acaption2 my-8">
          {{ caption2 }}
        </h2>
        <div class="atext">
          <prismic-rich-text :field="text" />
        </div>
      </v-col>
      <v-col cols="12" md="7" class="bg-image">
        <v-container v-if="$vuetify.breakpoint.smAndUp" :class="negativeMargin">
          <v-row>
            <v-col v-for="(item, i) in awards" :key="i" cols="6">
              <AwardCard :item="item" />
            </v-col>
          </v-row>
        </v-container>
        <v-carousel
          v-else
          hide-delimiters
          show-arrows
          interval="10000"
        >
          <v-carousel-item v-for="(item, i) in awards" :key="i+10">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <AwardCard :item="item" class="mx-8" />
                </v-col>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Caption from '../shared/Caption'
import AwardCard from '../awards/Card'
export default {
  components: { Caption, AwardCard },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    text: { type: Array, required: true },
    awards: { type: Array, required: true }
  },
  computed: {
    negativeMargin () {
      return this.$vuetify.breakpoint.mdAndUp ? 'negative-margin' : ''
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
.bg-image {
  background-image:url(/orange-points.png);
  background-position:center;
}
.negative-margin {
  margin-top: -90px;
}
</style>
