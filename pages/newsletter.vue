<template>
  <v-app>
    <v-row>
      <v-col cols="6" class="pa-0">
        <v-img cover src="/newsletter-signature.png" :height="availableHeight" eager />
      </v-col>
      <v-col cols="6" class="pa-12 grey lighten-3">
        <p class="title text-center">
          Tenha acesso às novidades exclusivas sobre a previdência direto de especialistas
        </p>
        <v-form ref="campaignForm" v-model="form.valid" lazy-validation>
          <v-text-field
            v-model="form.name"
            label="Seu nome"
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
            label="Telefone (Whatsapp)"
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
          <p class="caption">
            Inscreva-se para receber os conteúdos selecionados da Advocacia Alves. Suas informações serão utilizadas de acordo com a nossa política de privacidade. Você pode optar por sair a qualquer momento.
          </p>
          <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
          <v-btn class="primary" :loading="form.submitting" @click="submit">
            <span class="white--text text-uppercase">Inscreva-se</span>
          </v-btn>
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
      ]
    }
  }),
  computed: {
    availableHeight () {
      if (process.client) {
        return window.innerHeight
      }
      return 0
    }
  },
  methods: {
    showErrorMessage () {
      this.snackbar = {
        show: true,
        color: 'error',
        message: 'Não foi possível registrar a sua solicitação, tente novamente mais tarde!'
      }
    },
    showSuccessMessage () {
      this.snackbar = {
        show: true,
        color: 'success',
        message: 'Solicitação enviada, em breve entraremos em contato pelo número informado!'
      }
    },
    resetFormValues () {
      this.form = { name: '', phone: '', email: '', valid: true, submitting: false }
      this.$refs.campaignForm.resetValidation()
    },
    onError (error) {
      this.showErrorMessage()
      this.form.submitting = false
      window.console.log('Error happened:', error)
    },
    async submit () {
      if (this.form.submitting) { return }

      try {
        if (this.$refs.campaignForm.validate()) {
          this.form.submitting = true
          const token = await this.$recaptcha.getResponse()
          window.console.log('ReCaptcha token:', token)
          await this.$recaptcha.reset()
        }
      } catch (error) {
        this.showErrorMessage()
        this.form.submitting = false
        window.console.log('Login error:', error)
      }
    },
    onSuccess (token) {
      this.$axios.post(`${window.location.origin}/api/campaign`,
        { name: this.form.name, phone: this.form.phone, email: this.form.email })
        .then((res) => {
          if (res.status === 200) {
            this.resetFormValues()
            this.showSuccessMessage()
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
  }
}
</script>
