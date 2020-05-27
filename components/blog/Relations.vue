<template>
  <v-container>
    <v-row class="my-12">
      <v-col cols="12">
        <div class="flex title font-weight-bold">
          Conteúdo relacionado
        </div>
      </v-col>
      <v-col v-for="(related,i) in relations" :key="i" cols="4">
        <v-card hover height="180" :href="`/blog/${related.uid}`">
          <v-img height="100%" :src="related.data.image.url">
            <v-overlay :absolute="true" :value="true" opacity="0.30" class="d-flex align-start">
              <v-card-subtitle class="white--text pb-0">
                {{ related.data.type }}
              </v-card-subtitle>
              <v-card-title class="white--text pt-0">
                {{ related.data.title }}
              </v-card-title>
            </v-overlay>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    relations: {
      type: Array,
      required: true
    }
  }
}
</script>
