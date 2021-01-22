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
  data: () => ({
    selected: 0,
    position: 0,
    quiz: [
      {
        type: TextField,
        props: {
          id: 'email',
          label: '1 - Qual o seu e-mail?',
          next: 1,
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
          next: 2,
          label: '2 - Qual o seu nome?',
          rules: [v => !!v || 'Preencha com seu nome.']
        }
      },
      {
        type: PhoneField,
        props: {
          next: 3,
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
            { text: 'Amarelo', value: 0, next: 4 },
            { text: 'Preto', value: 1, next: 5 },
            { text: 'Rosa', value: 2, next: 6 },
            { text: 'Vermelho', value: 3, next: 7 }
          ]
        }
      },
      {
        type: TextField,
        props: {
          id: 'text4',
          label: '5 - Amarelo?',
          rules: [v => !!v || 'Preencha com seu nome.']
        }
      },
      {
        type: TextField,
        props: {
          id: 'text5',
          label: '6 - Preto?',
          rules: [v => !!v || 'Preencha com seu nome.']
        }
      },
      {
        type: TextField,
        props: {
          id: 'text6',
          label: '7 - Rosa?',
          rules: [v => !!v || 'Preencha com seu nome.']
        }
      },
      {
        type: TextField,
        props: {
          id: 'text7',
          label: '8 - Vermelho?',
          rules: [v => !!v || 'Preencha com seu nome.']
        }
      }
    ],
    responses: [],
    track: []
  }),
  methods: {
    nextQuestion () {
      this.track.push(this.position)
      this.position = this.selected
      // const next = this.position + 1
      // if (next < this.quiz.length) {
      //   this.position++
      // }
    },
    previousQuestion () {
      if (this.track.length) {
        this.position = this.track.pop()
      }
      // const previous = this.position - 1
      // if (previous >= 0) {
      //   this.position--
      // }
    },
    updateResponse (answer, next) {
      if (next > -1) {
        this.selected = next
      }
      this.responses[this.position] = answer
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
