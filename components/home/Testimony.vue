<template>
  <section>
    <SectionHeader :caption1="caption1" :caption2="caption2" :caption3="caption3" />
    <v-container>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-slide-group show-arrows>
            <v-slide-item v-for="item in testimonies" :key="item.id">
              <v-card class="mx-4 pa-4 d-flex flex-column" height="426" :width="cardWidth" outlined>
                <v-icon color="blue accent-1" x-large>
                  mdi-format-quote-open
                </v-icon>
                <p class="titext text-center mb-0">
                  {{ item.data.text }}
                </p>
                <v-spacer />
                <v-divider />
                <v-rating
                  align="center"
                  color="yellow darken-2"
                  readonly
                  length="5"
                  size="30"
                  :value="item.data.stars"
                />
                <p class="tiperson text-center mb-0">
                  {{ item.data.person }}
                </p>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import SectionHeader from '../shared/SectionHeader'
export default {
  components: { SectionHeader },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true },
    testimonies: { type: Array, required: true }
  },
  computed: {
    cardWidth () {
      return this.$vuetify.breakpoint.mdAndUp ? '355' : '295'
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
</style>
