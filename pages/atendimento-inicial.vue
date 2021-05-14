<template>
  <FlowForm
    v-if="questions.length>0"
    :questions="questions"
    :language="language"
    :standalone="true"
    :progressbar="false"
  />
</template>
<script>
import FlowForm, { LanguageModel, QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'
export default {
  layout: 'blank',
  components: { FlowForm },
  async asyncData ({ $prismic, error }) {
    try {
      const page = (await $prismic.api.getSingle('attendance'))

      return { page }
    } catch (e) {
      error({ statusCode: 500, title: 'Internal Server Error' })
    }
  },
  data () {
    return {
      questions: [],
      language: new LanguageModel({
        continue: 'Continuar',
        pressEnter: 'Pressione ENTER'
      })
    }
  },
  mounted () {
    window.console.log(this.page)
    const config = this.page.data.body
    window.console.log(config)
    const questions = []
    for (const i in config) {
      const { primary, items } = config[i]
      if (config[i].slice_type === 'section_break') {
        questions.push(this.createSectionBreak(primary))
      }
      if (config[i].slice_type === 'text') {
        questions.push(this.createTextField(primary))
      }
      if (config[i].slice_type === 'phone') {
        questions.push(this.createPhoneField(primary))
      }
      if (config[i].slice_type === 'e-mail') {
        questions.push(this.createEmailField(primary))
      }
      if (config[i].slice_type === 'select_field') {
        questions.push(this.createSelectField(primary, items))
      }
    }

    this.questions = questions
  },
  methods: {
    createSectionBreak (data) {
      return new QuestionModel({
        id: data.id,
        title: data.title,
        description: data.description,
        content: data.content,
        type: QuestionType.SectionBreak,
        jump: () => data.jump
      })
    },
    createTextField (data) {
      return new QuestionModel({
        id: data.id,
        title: data.question,
        type: QuestionType.Text,
        required: data.required,
        mask: data.mask,
        placeholder: data.placeholder,
        jump: () => data.jump
      })
    },
    createPhoneField (data) {
      return new QuestionModel({
        id: data.id,
        title: data.question,
        type: QuestionType.Phone,
        placeholder: data.placeholder,
        required: data.required,
        jump: () => data.jump
      })
    },
    createEmailField (data) {
      window.console.log(data)
      return new QuestionModel({
        id: data.id,
        title: data.question,
        type: QuestionType.Email,
        placeholder: data.placeholder,
        required: data.required,
        jump: () => data.jump
      })
    },
    createSelectField (data, items) {
      const { options, jump } = this.createChoiceOptions(items)

      return new QuestionModel({
        id: data.id,
        title: data.question,
        type: QuestionType.MultipleChoice,
        helpText: data.help_text,
        required: data.required,
        multiple: data.multiple,
        nextStepOnAnswer: data.next_step_on_answer,
        options,
        jump
      })
    },
    createChoiceOptions (items) {
      const options = []
      const jump = {}
      for (const i in items) {
        options.push(new ChoiceOption({ label: items[i].label, value: items[i].value }))
        jump[items[i].value] = items[i].jump
      }

      return { options, jump }
    }

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
