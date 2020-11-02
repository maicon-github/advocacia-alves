<template>
  <section>
    <v-container>
      <v-row>
        <v-col sm="12" md="6">
          <div>
            <Caption :text="caption1" />
            <h1 class="caption2 mt-6">
              {{ caption2 }}
            </h1>
            <div class="caption3 mt-6 mb-16">
              {{ caption3 }}
            </div>
            <GoogleRate
              v-if="$vuetify.breakpoint.mdAndUp"
              :caption1="rcaption1"
              :caption2="rcaption2"
              :icon="ricon"
              :value="rvalue"
            />
          </div>
        </v-col>

        <v-col sm="12" md="6" :style="`background-image:url(${fimage.url});background-size:contain;background-position:center;`">
          <ContactForm :caption1="fcaption1" :caption2="fcaption2" class="mt-5" />
        </v-col>

        <v-col v-if="$vuetify.breakpoint.smAndDown" class="mx-auto pt-16">
          <GoogleRate
            :caption1="rcaption1"
            :caption2="rcaption2"
            :icon="ricon"
            :value="rvalue"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import Caption from '../shared/Caption'
import GoogleRate from '../shared/GoogleRate'
import ContactForm from './ContactForm'
export default {
  components: { Caption, ContactForm, GoogleRate },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true },
    rcaption1: { type: String, required: true },
    rcaption2: { type: String, required: true },
    fcaption1: { type: String, required: true },
    fcaption2: { type: String, required: true },
    fimage: { type: Object, required: true },
    ricon: { type: Object, required: true },
    rvalue: { type: String, required: true }
  }
}
</script>
<style scoped>
.caption2 {
  color: #3D3D3D;
  font-size: 48px;
  letter-spacing: 3.43px;
  line-height: 50px;
}
.caption3 {
  color: #3D3D3D;
  font-family: Roboto;
  font-size: 20px;
  line-height: 32px;
}
</style>
