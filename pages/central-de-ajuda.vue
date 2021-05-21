<template>
  <div>
    <v-container class="pb-16 mb-16">
      <v-row>
        <v-col cols="12">
          <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0" />
        </v-col>
      </v-row>
      <v-row>
        <div class="mx-auto text-center">
          <CenteredCaption text="CENTAL DE AJUDA" />
        </div>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center catitle mt-4">
            {{ title }}
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(contact, i) in contacts" :key="i" cols="12" :md="12/contacts.length">
          <v-card outlined height="271" width="405" class="mt-10">
            <div class="pt-6 px-4 cacard">
              <p class="cactitle text-center">
                <v-icon color="success">
                  mdi-check-circle-outline
                </v-icon>
                {{ contact.name }}
              </p>
              <p class="cacdesc">
                {{ contact.description }}
              </p>
            </div>
            <div class="text-center py-9 cacvalue">
              <v-icon color="#01408d" large>
                mdi-{{ contact.icon }}
              </v-icon>
              <a v-if="contact.link" :href="cardHref(contact.link)" target="_blank" text>
                {{ contact.value }}
              </a>
              <span v-else>{{ contact.value }}</span>
            </div>
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
</template>
<script>
import Breadcrumb from '../components/shared/Breadcrumb'
import CenteredCaption from '../components/shared/CenteredCaption'
export default {
  components: { Breadcrumb, CenteredCaption },
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('central_de_ajuda'))
      window.console.log(page)
      const sections = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'faq')
      ))
      return {
        ...page.data,
        sections: sections.results,
        breadCrumbItems: [
          { text: 'Inicio', disabled: false, href: '/' },
          { text: 'Central de atendimento', disabled: true, href: '/central-de-atendimento' }
        ]
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  methods: {
    cardHref (link) {
      return link && link.length > 0 ? link : 'javascript:;'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description }
      ]
    }
  }
}
</script>
<style scoped>
.catitle {
  color: #3D3D3D;
  font-size: 48px;
  letter-spacing: 0.45px;
  line-height: 58px;
}
.cacard {
  width: 100%;
  height: 171px;
  background-color:#F0F0F0;
}
.cactitle {
  color: #3D3D3D;
  font-size: 24px;
  letter-spacing: 0.23px;
  line-height: 29px;
}
.cacdesc {
  color: #3D3D3D;
  font-size: 20px;
  letter-spacing: 0.19px;
  line-height: 23px;
}
.cacvalue {
  color: #3D3D3D;
  font-size: 18px;
  letter-spacing: 0.17px;
  line-height: 21px;
}
</style>
