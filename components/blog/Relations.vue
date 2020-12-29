<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="12">
        <div class="flex title font-weight-bold">
          Conteúdo relacionado
        </div>
      </v-col>
      <v-col v-for="(related,i) in relations" :key="i" :cols="cardSize">
        <v-card hover min-height="225" :href="`/blog/${related.uid}`" class="py-3">
          <v-img :src="related.data.image.url" cover eager height="75" />
          <v-card-subtitle class="py-0 pt-2" style="font-size: 0.750rem;">
            {{ related.data.type }}
          </v-card-subtitle>
          <v-card-title class="pt-0" style="font-weight: normal;">
            {{ related.data.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    relations: { type: Array, required: true }
  },
  computed: {
    cardSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '12'
        case 'sm':
          return '6'
        case 'md':
          return '6'
        default:
          return '4'
      }
    }
  },
  mounted () {
    for (let i = 0; i < this.relations.length; i++) {
      this.relations[i].data.type = this.$categoryDescription(this.relations[i].data.type)
    }
  }
}
</script>
