<template>
  <div class="mt-12">
    <v-img :src="banner.url" width="100%" cover>
      <h1 class="display-2 font-weight-bold mb-6 text-center mt-12 white--text">
        {{ title }}
      </h1>
      <h3 class="display-1 font-weight-bold text-center white--text">
        {{ subtitle }}
      </h3>
    </v-img>
    <v-container class="mb-12">
      <v-row>
        <v-col v-for="(plan, i) in plans" :key="i" :cols="12/plans.length">
          <v-card outlined>
            <v-card-title class="title">
              {{ plan.caption }}
            </v-card-title>
            <v-card-subtitle>
              {{ plan.description }}
            </v-card-subtitle>
            <v-card-text class="font-weight-bold text-center display-1">
              {{ plan.value }}
            </v-card-text>
            <prismic-rich-text :field="plan.information" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('planos'))
      return { ...page.data }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  }
}
</script>
