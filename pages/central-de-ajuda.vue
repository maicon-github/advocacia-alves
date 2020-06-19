<template>
  <v-app>
    <div class="mt-12">
      <v-img :src="banner.url" width="100%" cover eager>
        <h1 class="display-2 font-weight-bold mb-6 text-center mt-12 white--text">
          {{ title }}
        </h1>
        <v-col cols="6" offset="3">
          <v-text-field label="Pesquise por termos relacionados a sua dúvida" background-color="white" outlined>
            <v-icon slot="append">
              mdi-magnify
            </v-icon>
          </v-text-field>
        </v-col>
      </v-img>
      <v-container class="mb-12">
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 font-weight-bold mb-6 text-center">
              {{ contact_title }}
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(contact, i) in contacts" :key="i" :cols="12/contacts.length">
            <v-card outlined height="180">
              <v-card-title class="headline white--text" style="background-color: #e57100;">
                {{ contact.name }}
              </v-card-title>
              <v-card-subtitle class="white--text" style="background-color: #e57100;">
                {{ contact.description }}
              </v-card-subtitle>
              <v-card-text class="pt-6 font-weight-bold text-center">
                <v-icon>
                  mdi-{{ contact.icon }}
                </v-icon>
                {{ contact.value }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="grey lighten-3 pb-12">
        <v-container>
          <v-row v-for="(section, i) in sections" :key="i" class="mt-12">
            <v-col cols="12">
              <h2 class="display-1 font-weight-bold mb-6">
                {{ section.data.title }}
              </h2>
              <v-expansion-panels>
                <v-expansion-panel v-for="(item,j) in section.data.questions" :key="j">
                  <v-expansion-panel-header class="headline">
                    {{ item.question }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>{{ item.answer }}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('central_de_ajuda'))
      const sections = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'faq')
      ))
      return { ...page.data, sections: sections.results }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  }
}
</script>
