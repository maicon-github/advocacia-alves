<template>
  <div>
    <v-container class="pb-6 mb-6">
      <v-row>
        <v-col cols="12">
          <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0 red--text" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row>
            <div class="mx-auto text-center">
              <div class="caption1 py-1">
                SERVIÇOS
              </div>
            </div>
          </v-row>
          <v-row>
            <v-col cols="12" class="mb-8">
              <h1 class="stitle mb-6 text-center">
                {{ title }}
              </h1>
              <p class="ssubtitle text-center">
                {{ subtitle }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-icon :color="color_icon_1">
            mdi-{{ icon_1 }}
          </v-icon>
          <font class="benefit">
            {{ hcaption1 }}
          </font>
        </v-col>
        <v-col cols="4">
          <v-icon :color="color_icon_2">
            mdi-{{ icon_2 }}
          </v-icon>
          <font class="benefit">
            {{ hcaption2 }}
          </font>
        </v-col>
        <v-col cols="4">
          <v-icon :color="color_icon_3">
            mdi-{{ icon_3 }}
          </v-icon>
          <font class="benefit">
            {{ hcaption3 }}
          </font>
        </v-col>
      </v-row>
      <v-row class="mt-16" justify="center">
        <v-col v-for="(plan, i) in plans" :key="i" cols="12" md="6">
          <v-card
            height="100%"
            class="pa-12 d-flex flex-column"
            outlined
            light
          >
            <h2 class="text-center servicename">
              {{ plan.typeservice }}
            </h2>
            <h3 class="text-center py-8 servicealias">
              {{ plan.service_name }}
            </h3>
            <p class="servicedesc">
              <prismic-rich-text :field="plan.description_service" />
            </p>
            <p class="text-center serviceprice py-4">
              {{ plan.price_option}}
            </p>
            <div v-for="(feature, f) in plan.features" :key="`f-${f}`" class="d-flex">
              <p class="d-inline">
                <v-icon :color="plan.color_icon">
                  mdi-{{ plan.positive_icon }}
                </v-icon>
                 {{ feature.text }}
              </p>
            </div>
            <div v-for="(negative_feature, nf) in plan.negative_features" :key="`nf-${nf}`" class="d-flex">
              <p class="d-inline text--secondary">
                <v-icon :color="plan.denial_icon_color">
                  mdi-{{ plan.denial_icon }}
                </v-icon>
                {{ negative_feature.text }}
              </p>
            </div>
            <v-spacer />
            <v-btn class="mx-auto" color="#044486" width="150px" @click="open(plan)">
              <span class="white--text text-uppercase">{{ plan.call_to_action }}</span>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-col cols="12" class="mt-6" v-if="videoHighlights">
        <v-row>
          <div class="mx-auto text-center">
            <div class="caption1 py-1 text-uppercase">
              {{ videoHighlights.eyebrow_headline }}
            </div>
          </div>
        </v-row>
        <v-row>
          <v-col cols="12" class="mb-8">
            <h1 class="stitle mb-6 text-center">
              {{ videoHighlights.title_video }}
            </h1>
            <p class="ssubtitle text-center">
              <prismic-rich-text :field="videoHighlights.description" />
            </p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-responsive :aspect-ratio="16/9">
            <iframe
              class="mx-auto"
              width="100%"
              height="100%"
              :src="videoHighlights.video_source.url"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-responsive>
        </v-row>
      </v-col>
    </v-container>
    <div class="grey lighten-3 pb-12" v-show="faqs.length > 0">
      <Faq :data="faqs" />
    </div>
  </div>
</template>
<script>
import Faq from '../../components/shared/Faq'
import Breadcrumb from '../../components/shared/Breadcrumb'
export default {
  components: { Breadcrumb, Faq },
  async asyncData ({ $prismic, error, params, $serviceDescription }) {
    try {
      const service = await $prismic.api.getByUID('service', params.id)

      const serviceName = service.data.meta_description
      const plans = service.data.body.find(plan => plan.slice_type === 'pricing_table')
      const videoHighlights = service.data.body.find(plan => plan.slice_type === 'video_highlights')

      const faqs = (await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'faq'),
          $prismic.predicates.at('my.faq.type', params.id)
        ]
      ))

      return {
        ...service.data,
        plans: plans.items,
        serviceName,
        videoHighlights: videoHighlights?.primary,
        faqs: faqs.results || [],
        breadCrumbItems: [
          { text: 'Inicio', disabled: false, href: '/' },

          { text: 'Serviço', disabled: true, href: '/servico' },
          { text: serviceName, disabled: true, href: `/servico/${params.id}` }
        ]
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description }
      ]
    }
  },
  methods: {
    open (plan) {
      window.open(plan.link_direcionamento.url, '_blank').focus()
    }
  }
}
</script>
<style scoped>
.stitle {
  color: #3D3D3D;
  font-size: 48px;
  line-height: 58px;
}
.ssubtitle {
  color: #707070;
  font-size: 20px;
  line-height: 24px;
}
.servicename {
  color: #3D3D3D;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 0.32px;
  line-height: 41px
}
.servicealias {
  color: #01408D;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.23px;
  line-height: 29px;
}
.servicedesc {
  color: #3D3D3D;
  font-size: 18px;
  letter-spacing: 0.17px;
  line-height: 21px;
}
.serviceprice {
  color: #3D3D3D;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.45px;
  line-height: 56px;
}
.benefit {
  color: #01408D;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.15px;
  line-height: 19px;
  vertical-align: middle;
}
.caption1 {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border-bottom: 3px solid #044486;
  color: #000000;
}
</style>
