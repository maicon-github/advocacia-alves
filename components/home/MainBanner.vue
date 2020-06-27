<template>
  <div class="blue darken-4 py-12 white--text" :style="style">
    <v-container>
      <v-row>
        <v-col cols="4" offset="2">
          <div class="flex display-2 font-weight-regular mb-5">
            {{ title }}
          </div>
          <div class="flex title font-weight-regular">
            {{ subtitle }}
          </div>
        </v-col>
        <v-col cols="4">
          <ContactForm />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ContactForm from './ContactForm'
export default {
  components: { ContactForm },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      return 'background-image: url(' + this.banner + ');background-size: cover;'
    }
  }
}
</script>
