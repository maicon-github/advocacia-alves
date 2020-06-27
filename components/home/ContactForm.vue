<template>
  <div style="background-color: #003554" class="white--text pa-6 rounded-lg text-center">
    <p> Quero tirar minhas dúvidas com um advogado </p>
    <v-form ref="leadForm" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        label="Seu nome"
        :rules="nameRules"
        background-color="white"
        filled
        dense
        required
      />
      <v-text-field
        v-model="phone"
        v-mask="['(##) ####-####', '(##) #####-####']"
        :rules="phoneRules"
        background-color="white"
        label="Telefone (Whatsapp)"
        filled
        dense
        required
      />
      <v-btn color="#e57100" class="my-auto" dark :loading="loading" @click="submit">
        <span class="white--text text-uppercase">
          Solicitar ligação
        </span>
      </v-btn>
      <v-snackbar
        v-model="snackbar"
        :timeout="6000"
        centered
        absolute
        color="success"
        :top="true"
      >
        {{ message }}

        <template v-slot:action="{ attrs }">
          <v-btn
            text
            color="blue"
            v-bind="attrs"
            @click="snackbar = false"
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
    message: '',
    snackbar: false,
    valid: true,
    loading: false,
    name: '',
    nameRules: [
      v => !!v || 'Preencha com seu nome.'
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Preencha com seu telefone celular.',
      v => /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/.test(v) || 'Preencha com seu telefone celular.'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.leadForm.validate()) {
        this.loading = true
        this.$axios.post(`${window.location.href}api/lead`, { name: this.name, phone: this.phone })
          .then((res) => {
            if (res.status === 200) {
              window.console.log(res)
              this.name = ''
              this.phone = ''
              this.message = 'Solicitação enviada, em breve entraremos em contato pelo número informado'
            } else if ('message' in res.data) {
              this.message = this.data.message
            }
          })
          .catch((err) => {
            window.console.log(err)
            this.message = 'Houve um erro ao agendar tente novamente mais tarde'
          })
          .finally(() => {
            this.loading = false
            this.snackbar = true
          })
      }
    }
  }
}
</script>
