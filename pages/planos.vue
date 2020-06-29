<template>
  <div>
    <v-img :src="banner.url" width="100%" cover eager>
      <h1 class="display-2 font-weight-bold mb-6 text-center mt-12 white--text">
        {{ title }}
      </h1>
      <h3 class="display-1 font-weight-bold text-center white--text">
        {{ subtitle }}
      </h3>
    </v-img>
    <v-container class="my-12">
      <v-row>
        <v-col v-for="(plan, i) in plans" :key="i" :cols="12/plans.length">
          <v-card outlined height="500px" hover :href="plan.link" target="_blank">
            <v-card-title class="title">
              {{ plan.caption }}
            </v-card-title>
            <v-card-subtitle class="black--text">
              {{ plan.description }}
            </v-card-subtitle>
            <v-card-text class="black--text">
              <p class="font-weight-bold text-center display-1">
                {{ plan.value }}
              </p>
              <prismic-rich-text :field="plan.information" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="grey lighten-3 pb-12">
      <v-container class="py-12">
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 font-weight-bold mb-6">
              {{ faq.data.title }}
            </h2>
            <v-expansion-panels>
              <v-expansion-panel v-for="(item,j) in faq.data.questions" :key="j">
                <v-expansion-panel-header class="headline">
                  {{ item.question }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ item.answer }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('planos'))
      const faq = (await $prismic.api.getByID(page.data.faq.id))
      return { ...page.data, faq }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  }
}
</script>
