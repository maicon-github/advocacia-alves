<template>
  <section>
    <SectionHeader :caption1="caption1" :caption2="caption2" :caption3="caption3" />
    <v-container class="left-bg-img">
      <v-row class="right-bg-img">
        <v-col cols="12" :class="$vuetify.breakpoint.smAndDown ? 'px-0' : '' ">
          <v-carousel
            class="hidden-sm-and-down"
            hide-delimiters
            show-arrows-on-hover
            cycle
            interval="10000"
            :show-arrows="testimonies.length > 3"
          >
            <v-carousel-item v-for="(chunk, i) in testimonyChunks" :key="i">
              <v-container>
                <v-row>
                  <v-col v-for="(item, j) in chunk" :key="j+100" md="4">
                    <TestimonyCard :item="item" />
                  </v-col>
                </v-row>
              </v-container>
            </v-carousel-item>
          </v-carousel>
          <v-carousel
            class="hidden-md-and-up"
            hide-delimiters
            show-arrows
            cycle
            interval="10000"
          >
            <v-carousel-item v-for="(item, i) in testimonies" :key="i">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <TestimonyCard :item="item" class="mx-4" />
                  </v-col>
                </v-row>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import TestimonyCard from '../testimony/Card'
import SectionHeader from '../shared/SectionHeader'
export default {
  components: { SectionHeader, TestimonyCard },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true },
    testimonies: { type: Array, required: true }
  },
  computed: {
    testimonyChunks () {
      const perChunk = 3

      return this.testimonies.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
    }
  }
}
</script>
<style scoped>
.titext {
  color: rgba(0,0,0,0.87);
  font-size: 18px;
  line-height: 21px;
}
.tiperson {
  color: #01408D;
  font-size: 18px;
  line-height: 21px;
}
.left-bg-img {
  background-image: url(/orange-points.png);
  background-position: top 25px left;
}

.right-bg-img {
  background-image: url(/orange-points.png);
  background-position: bottom 35px right;
}
</style>
