<template>
  <section>
    <SectionHeader :caption1="caption1" :caption2="caption2" :caption3="caption3" />

    <v-container class="text-center text-md-left">
      <v-row class="px-5">
        <v-col cols="12" md="3">
          <v-row v-for="(item, i) in items.slice(0, 2)" :key="i">
            <div class="rounded-circle blue darken-2 pa-4 mx-auto mx-md-0">
              <v-icon color="white">
                {{ `mdi-${item.icon}` }}
              </v-icon>
            </div>
            <h3 class="sicaption my-4">
              {{ item.caption }}
            </h3>
            <prismic-rich-text :field="item.text" class="sitext" />
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center px-5 img-parent">
          <SeoImage :image="image" css-class="mb-16 px-4 img-contain" />
        </v-col>
        <v-col sm="12" md="3">
          <v-row v-for="(item, i) in items.slice(2)" :key="i">
            <div class="rounded-circle blue darken-2 pa-4 mx-auto mx-md-0">
              <v-icon color="white">
                {{ `mdi-${item.icon}` }}
              </v-icon>
            </div>
            <h3 class="sicaption my-4">
              {{ item.caption }}
            </h3>
            <prismic-rich-text :field="item.text" class="sitext" />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import SectionHeader from '../shared/SectionHeader'
import SeoImage from '../shared/SeoImage'
export default {
  components: { SectionHeader, SeoImage },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true },
    items: { type: Array, required: true },
    image: { type: Object, required: true }
  }
}
</script>
<style scoped>
.sicaption {
  width:100%;
  color: #3D3D3D;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
}
.sitext {
  color: #3D3D3D;
  font-size: 17px;
  line-height: 28px;
}
</style>
