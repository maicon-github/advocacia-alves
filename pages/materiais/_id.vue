<template>
  <v-app>
    <v-row>
      <v-col cols="12" md="6" class="pa-0">
        <div class="maxcontent mx-auto white d-flex">
          <nuxt-img :src="content_image.url" sizes="sm:320 md:730" class="ma-auto d-block img-contain" />
        </div>
        <v-container class="py-0 px-6">
          <v-col cols="12">
            <div class="categoria py-1">
              {{ categoria }}
            </div>
          </v-col>
          <v-col cols="12">
            <div class="flex display-1 font-weight-regular">
              {{ titulo_material }}
            </div>
          </v-col>
          <v-col cols="12">
            <prismic-rich-text :field="content_description" />
          </v-col>
        </v-container>
      </v-col>
      <v-col cols="12" md="6" class="pa-12 grey lighten-3">
        <p class="title">
          {{ subtitulo_formulario }}
        </p>
        <prismic-rich-text :field="header_text_description" />
        <v-form ref="ebookForm" v-model="form.valid" lazy-validation class="mt-12">
          <v-text-field
            v-model="form.name"
            label="Nome"
            :rules="rules.name"
            background-color="white"
            filled
            dense
            required
          />
          <v-text-field
            v-model="form.phone"
            v-mask="['(##) ####-####', '(##) #####-####']"
            :rules="rules.phone"
            background-color="white"
            label="Telefone com DDD"
            filled
            dense
            required
          />
          <v-text-field
            v-model="form.email"
            :rules="rules.email"
            background-color="white"
            label="E-mail"
            filled
            dense
            required
          />
          <v-select
            v-model="form.interesses"
            :rules="rules.interesses"
            :items="interesses"
            background-color="white"
            label="Interesses"
            filled
            dense
            multiple
          ></v-select>
          <prismic-rich-text :field="footer_text_description" />
          <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
          <div class="text-center pt-10">
            <v-btn class="primary" :loading="form.submitting" @click="submit">
              <span class="white--text text-uppercase">Enviar</span>
            </v-btn>
          </div>
          <v-snackbar
            v-model="snackbar.show"
            :timeout="6000"
            centered
            absolute
            :color="snackbar.color"
            :top="true"
          >
            {{ snackbar.message }}

            <template v-slot:action="{ attrs }">
              <v-btn
                text
                color="blue"
                v-bind="attrs"
                @click="snackbar.show = false"
              >
                Fechar
              </v-btn>
            </template>
          </v-snackbar>
        </v-form>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>

export default {
  layout: 'blank',
  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
      interesses: [],
      valid: true,
      submitting: false
    },
    snackbar: { show: false, message: '', color: 'success' },
    rules: {
      name: [
        v => !!v || 'Preencha com seu nome.'
      ],
      phone: [
        v => !!v || 'Preencha com seu telefone celular.',
        v => /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/.test(v) || 'Preencha com seu telefone celular.'
      ],
      email: [
        v => !!v || 'Preencha com seu endereço de e-mail.',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Preencha com seu endereço de e-mail.'
      ],
      interesses: [
        v => (!!v && v.length > 0) || 'Selecione ao menos um interesse.'
      ]
    },
    interesses: [{
      text: 'Aposentadoria',
      value: '3z11dcf1cd7416888f16d81f22535860ee12fb669852ad6dd5687f2fd8b9448f19'
    }, {
      text: 'Auxílio',
      value: '3z11dcf1cd7416888f16d81f22535860ee178bed344507561b3edc070412305b82'
    }, {
      text: 'BPC - LOAS',
      value: '3z11dcf1cd7416888f16d81f22535860ee30a0df118da889d1148d0f6d95d4e2ea'
    }, {
      text: 'Revisão',
      value: '3z11dcf1cd7416888f16d81f22535860ee488cfdcf14b08a507843780d86336121'
    }, {
      text: 'Salário maternidade',
      value: '3z11dcf1cd7416888f16d81f22535860eeef309505830c7d5b855b17a3d5c3bae2'
    }, {
      text: 'Dica',
      value: '3z11dcf1cd7416888f16d81f22535860eecb9cdff9a6815576b40bb70d1c3d68aa'
    }]
  }),
  async asyncData ({ $prismic, error, params }) {
    try {
      const material = (await $prismic.api.getByUID('landing_page', params.id))
      return {
        uid: material.uid,
        ...material.data
      }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  methods: {
    showErrorMessage () {
      this.snackbar = {
        show: true,
        color: 'error',
        message: 'Não foi possível concluir o envio das informações, tente novamente mais tarde!'
      }
    },
    showSuccessMessage () {
      this.snackbar = {
        show: true,
        color: 'success',
        message: 'Informações recebidas com sucesso, uma nova aba irá ser aberta com o material desejado!'
      }
    },
    resetFormValues () {
      this.form = { name: '', phone: '', email: '', interesses: [], valid: true, submitting: false }
      this.$refs.ebookForm.resetValidation()
    },
    onError (error) {
      this.showErrorMessage()
      this.form.submitting = false
      window.console.log('Error happened:', error)
    },
    async submit () {
      if (this.form.submitting) { return }

      try {
        if (this.$refs.ebookForm.validate()) {
          this.form.submitting = true

          await this.$recaptcha.getResponse()
          await this.$recaptcha.reset()
        }
      } catch (error) {
        this.showErrorMessage()
        this.form.submitting = false
        window.console.log('Login error:', error)
      }
    },
    onSuccess (token) {
      const data = {
        token,
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        interesses: this.form.interesses
      }
      this.$axios.post(`${window.location.origin}/api/material`, data)
        .then((res) => {
          if (res.status === 200) {
            this.resetFormValues()
            this.showSuccessMessage()

            window.open(this.digital_content_link.url, '_blank').focus()
          } else {
            this.showErrorMessage()
          }
        })
        .catch((err) => {
          window.console.log(err)
          this.showErrorMessage()
        })
        .finally(() => {
          this.form.submitting = false
        })
    },
    onExpired () {
      this.form.submitting = false
      window.console.log('Expired')
    }
  },
  head () {
    const preloads = [
      { rel: 'preload', as: 'image', href: this.content_image.url }
    ]

    return {
      link: preloads,
      title: this.titulo_material,
      meta: [{ hid: 'description', name: 'description', content: this.meta_description }]
    }
  }
}
</script>
<style scoped>
.maxcontent {
  max-width: 830px;
}
.categoria {
  width: fit-content;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border-bottom: 3px solid #D6550A;
  color: #01408D;
}
</style>
