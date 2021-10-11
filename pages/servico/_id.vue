<template>
  <v-container class="pb-16 mb-16">
    <v-row>
      <v-col cols="12">
        <Breadcrumb :items="breadCrumbItems" class="mx-auto px-0 red--text" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <div class="mx-auto text-center">
            <CenteredCaption :text="hcaption1" />
          </div>
        </v-row>
        <v-row>
          <v-col cols="12" class="mb-8">
            <h1 class="stitle mb-6 text-center">
              {{ hcaption2 }}
            </h1>
            <p class="ssubtitle text-center">
              {{ hcaption3 }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in benefits" :key="i" cols="4">
        <v-icon color="success">
          mdi-check-circle-outline
        </v-icon>
        <font class="benefit">
          {{ item.benefit }}
        </font>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col v-for="(plan, i) in plans" :key="i" cols="6">
        <v-card
          height="100%"
          class="pa-12 d-flex flex-column"
          outlined
          light
        >
          <h2 class="text-center servicename">
            {{ plan.primary.title }}
          </h2>
          <h3 class="text-center py-8 servicealias">
            {{ plan.primary.name }}
          </h3>
          <p class="servicedesc">
            {{ plan.primary.description }}
          </p>
          <p class="text-center serviceprice py-4">
            {{ plan.primary.price }}
          </p>
          <div v-for="(item, j) in plan.items" :key="`a-${j}`" class="d-flex">
            <p class="d-inline">
              <v-icon color="success">
                mdi-check-circle-outline
              </v-icon>&nbsp;&nbsp;
              {{ item.ititle }}
            </p>
            <prismic-rich-text :field="item.idescription" />
          </div>
          <v-spacer />
          <v-btn class="mx-auto" href="https://advocaciaalves.com.br/" target="_blank" width="150px" color="success">
            PAGAR
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Breadcrumb from '../../components/shared/Breadcrumb'
import CenteredCaption from '../../components/shared/CenteredCaption'
export default {
  components: { Breadcrumb, CenteredCaption },
  async asyncData ({ $prismic, error, params, $serviceDescription }) {
    try {
      const service = (await $prismic.api.getSingle('service'))
      const serviceName = $serviceDescription(params.id)
      const plans = service.data.body.filter(plan => plan.primary.type === params.id)
      window.console.log(service.data.body)
      return {
        ...service.data,
        plans,
        breadCrumbItems: [
          { text: 'Inicio', disabled: false, href: '/' },
          { text: serviceName, disabled: true, href: `/service/${params.id}` }
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
</style>
