<template>
  <FlowForm
    :questions="quizzes[current]"
    :language="language"
    @complete="complete"
    @submit="submit"
  />
</template>
<script>
import FlowForm, { LanguageModel } from '@ditdot-dev/vue-flow-form'
import Nome from '../components/questoes/shared/Nome'
import Telefone from '../components/questoes/shared/Telefone'
import Email from '../components/questoes/shared/Email'
import Ouviu from '../components/questoes/shared/Ouviu'
import Assuntos from '../components/questoes/shared/Assuntos'

export default {
  layout: 'blank',
  components: { FlowForm },
  data () {
    return {
      quizzes: {
        contato: [Nome, Telefone, Email, Ouviu, Assuntos],
        outro: [],
        revisao: [],
        bpcloas: [],
        acaoPasep: [],
        pensaoMorte: [],
        aposentadoria: [],
        contribuicaoAtraso: [],
        auxilioEmergencial: [],
        beneficioIncapacidade: []
      },
      current: 'contato',
      language: new LanguageModel({
        continue: 'Continuar',
        pressEnter: 'Pressione ENTER'
      })
    }
  },
  methods: {
    complete (status, questions) {
      window.console.log('complete')
      window.console.log(status)
      window.console.log(questions)
    },
    submit (questions) {
      window.console.log('submit')
      window.console.log(questions)
    }
  }
}
</script>
<style>
  /* Import Vue Flow Form base CSS */
  @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  /* Import one of the Vue Flow Form CSS themes (optional) */
  @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
  /* @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
  /* @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>
