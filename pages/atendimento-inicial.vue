<template>
  <FlowForm
    :questions="questions"
    :language="language"
    :standalone="true"
    :progressbar="false"
  />
</template>
<script>
import FlowForm, { LanguageModel } from '@ditdot-dev/vue-flow-form'
// import contact from '../components/quizzes/contact'
// import aposentadoria from '../components/quizzes/aposentadoria'
// import revisao from '../components/quizzes/revisao'
import incapacidade from '../components/quizzes/incapacidade'
export default {
  layout: 'blank',
  components: { FlowForm },
  data () {
    return {
      current: null,
      questions: [
        // ...contact,
        // ...aposentadoria,
        // ...revisao,
        ...incapacidade
      ],
      language: new LanguageModel({
        continue: 'Continuar',
        pressEnter: 'Pressione ENTER'
      })
    }
  },
  methods: {
    // step (id, question) {
    //   window.console.log(id)
    //   if (id === 'AdvogadoCuidando') {
    //     window.console.log(question)
    //   }
    // },
    // complete (status, questions) {
    //   window.console.log('complete')
    //   window.console.log(status)
    //   window.console.log(questions)
    // },
    // submit (questions) {
    //   window.console.log('submit')
    //   window.console.log(questions)
    //   if (this.current === 'contato') {
    //     window.console.log(this.current)
    //     const assunto = [...questions].pop().answer
    //     window.console.log(assunto)
    //     if (assunto === 'Aposentadoria') {
    //       this.current = 'aposentadoria'
    //       window.console.log(this.current)
    //     }
    //   }
    // }
    // answer (input) {
    //   if (input.question.id === 'Situacoes') {
    //     const answer = input.question.answer
    //     if (answer.shift() === 'a') { input.question.jump = () => 'AtividadeInsalubre' }
    //   }
    // }
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
  .vff .f-fade-in-up { animation-name: unset; }
  .vff .f-fade-in-down { animation: unset; }
</style>
