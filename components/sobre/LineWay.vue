<template>
  <div>
    <v-row>
      <v-col
        v-for="(w, i) in items"
        :key="i+10"
        :md="w.wsize"
        :cols="w.wsize*2"
        :class="`text-center pa-3 ${bgPosition(i)}`"
      >
        <div v-if="w.wcaption">
          <div class="mx-auto text-center pcaption">
            <CenteredCaption :text="w.wcaption" />
          </div>
          <h2 class="swtitle mx-auto py-12">
            {{ w.wtitle }}
          </h2>
          <p class="swsubtitle">
            {{ w.wsubtitle }}
          </p>
        </div>
        <v-card v-if="w.wimage.url" class="mx-auto rounded-xl text-left img-parent" height="100%">
          <SeoImage :image="w.wimage" class="img-contain ma-auto d-block" height="180px" />
          <v-card-text>
            <p class="waytitle">
              {{ w.wtitle }}
            </p>
            <p class="waytext">
              {{ w.wtext }}
            </p>
          </v-card-text>
        </v-card>
        <div v-if="!w.wimage.url && !w.wcaption" class="wtext mx-auto">
          <h2 class="wtitle3 mx-auto py-12">
            {{ w.wtitle }}
          </h2>
          <p class="wsubtitle3">
            {{ w.wtext }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SeoImage from '../shared/SeoImage'
import CenteredCaption from '../shared/CenteredCaption'
export default {
  components: { CenteredCaption, SeoImage },
  props: {
    items: { type: Array, required: true }
  },
  methods: {
    bgPosition (i) {
      switch (i) {
        case 1: return 'bg-left'
        case 8: return 'bg-right'
      }
      return ''
    }
  }
}
</script>
<style scoped>
.pcaption {
  width:200px;
}
.swtitle {
  width: 253px;
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-align: center;
}
.swsubtitle {
  color: #707070;
  font-size: 20px;
  line-height: 24px;
}
.waytext {
  color: #3D3D3D;
  font-size: 16px;
  line-height: 19px;
  margin: 0;
}
.waytitle {
  color: #3D3D3D;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.45px;
  line-height: 44px;
  margin: 0;
}
.wtitle3 {
  color: #3D3D3D;
  font-size: 48px;
  line-height: 58px;
}
.wsubtitle3 {
  color: #3D3D3D;
  font-size: 18px;
  line-height: 21px;
}
.wtext {
    width: 261px;
}
.bg-right {
    background-image: url(/orange-points.png);
    background-position: bottom right;
}
.bg-left {
    background-image: url(/orange-points.png);
    background-position: bottom left;
}
</style>
