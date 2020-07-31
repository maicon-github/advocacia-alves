<template>
  <div style="background-color: #003554" class="white--text pa-6 rounded-lg text-center">
    <p> Quero tirar minhas dúvidas com um advogado </p>
    <v-form ref="leadForm" v-model="form.valid" lazy-validation>
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
      <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
      <v-btn color="#e57100" class="my-auto" dark :loading="form.submitting" @click="onSubmit">
        <span class="white--text text-uppercase">
          Solicitar ligação
        </span>
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
  </div>
</template>
<script>
export default {
  data: () => ({
    snackbar: { show: false, message: '', color: 'success' },
    form: { name: '', phone: '', valid: true, submitting: false },
    rules: {
      name: [
        v => !!v || 'Preencha com seu nome.'
      ],
      phone: [
        v => !!v || 'Preencha com seu telefone celular.',
        v => /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/.test(v) || 'Preencha com seu telefone celular.'
      ]
    }
  }),
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
      this.form = { name: '', phone: '', valid: true, submitting: false }
      this.$refs.leadForm.resetValidation()
    },
    submit () {
      if (this.form.submitting) { return }

      if (this.$refs.leadForm.validate()) {
        this.form.submitting = true
        this.$axios.post(`${window.location.origin}/api/lead`, { name: this.form.name, phone: this.form.phone })
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
      }
    },
    onError (error) {
      console.log('Error happened:', error)
    },
    async onSubmit () {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    onSuccess (token) {
      console.log('Succeeded:', token)
      // here you submit the form
      this.$refs.form.submit()
    },
    onExpired () {
      console.log('Expired')
    }
  }
}
</script>
