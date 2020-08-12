<template>
  <div class="root">
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <div v-for="(question, i) in quiz" :key="i">
            <keep-alive>
              <component
                :is="question.type"
                v-if="position == i"
                v-bind="question.props"
                @response="updateResponse"
              />
            </keep-alive>
          </div>
          <div class="d-flex justify-space-between">
            <v-btn color="#e57100" class="mt-5" dark @click="previousQuestion">
              Anterior
            </v-btn>
            <v-btn color="#e57100" class="mt-5" dark @click="nextQuestion">
              Próximo
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TextField from '../components/quiz/TextField'
import PhoneField from '../components/quiz/PhoneField'
import SelectionField from '../components/quiz/SelectionField'
export default {
  layout: 'blank',
  components: { TextField, PhoneField },
  data: () => ({
    position: 0,
    quiz: [
      {
        type: TextField,
        value: '',
        props: {
          id: 'email',
          label: '1 - Qual o seu e-mail?',
          rules: [
            v => !!v || 'Preencha com seu endereço de e-mail.',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Preencha com seu endereço de e-mail.'
          ]
        }
      },
      {
        type: TextField,
        props: {
          id: 'name',
          label: '2 - Qual o seu nome?',
          rules: [v => !!v || 'Preencha com seu nome.']
        }
      },
      {
        type: PhoneField,
        props: {
          id: 'phone',
          label: '3 - Qual o seu número de telefone celular?',
          mask: ['(##) ####-####', '(##) #####-####'],
          rules: [
            v => !!v || 'Preencha com seu telefone celular.',
            v => /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/.test(v) || 'Preencha com seu telefone celular.'
          ]
        }
      },
      {
        type: SelectionField,
        props: {
          id: 'cor',
          label: '4 - Qual sua cor favorita?',
          options: [
            { text: 'Amarelo', value: 0, next: 0 },
            { text: 'Preto', value: 1, next: 1 },
            { text: 'Rosa', value: 2, next: 0 },
            { text: 'Vermelho', value: 3, next: 1 }
          ]
        }
      }
    ],
    responses: []
  }),
  methods: {
    nextQuestion () {
      const next = this.position + 1
      if (next < this.quiz.length) {
        this.position++
      }
    },
    previousQuestion () {
      const previous = this.position - 1
      if (previous >= 0) {
        this.position--
      }
    },
    updateResponse (answer, next) {
      this.responses[this.position] = answer
      if (next !== 'undefined') {
        setTimeout(() => { this.position = next }, 300)
      }
    }
  }
}
</script>
<style scoped>
.root {
    background-color: #0191D2;
    width: 100%;
    height: 100%;
    color: white;
    overflow: hidden;
}
</style>
