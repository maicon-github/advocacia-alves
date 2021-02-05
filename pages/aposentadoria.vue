<template>
  <div>
    <FlowForm :questions="questions" :language="language" />
  </div>
</template>
<script>
import FlowForm, { QuestionModel, QuestionType, LanguageModel, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default {
  layout: 'blank',
  // eslint-disable-next-line vue/no-unused-components
  components: { FlowForm, QuestionModel, LanguageModel, ChoiceOption },
  data () {
    return {
      questions: [
        new QuestionModel({
          id: 'primeira',
          title: 'Você é servidor público hoje?',
          type: QuestionType.MultipleChoice,
          // placeholder: 'Responda aqui...',
          helpText: 'Selecione uma opção',
          required: true,
          jump: 'segunda',
          options: [
            new ChoiceOption({ label: 'Não' }),
            new ChoiceOption({ label: 'Sim, servidor CLT' }),
            new ChoiceOption({ label: 'Sim, servidor com regime próprio' })
          ]
        }),
        new QuestionModel({
          id: 'segunda',
          title: 'Você tem algum pedido de aposentadoria em andamento?',
          type: QuestionType.MultipleChoice,
          // placeholder: 'Responda aqui...',
          helpText: 'Selecione uma opção',
          required: true,
          jump: { a: 'quarta', b: 'terceira', c: 'terceira' },
          options: [
            new ChoiceOption({ label: 'Não', value: 'quarta' }),
            new ChoiceOption({ label: 'Sim, servidor CLT', value: 'terceira' }),
            new ChoiceOption({ label: 'Sim, servidor com regime próprio', value: 'terceira' })
          ]
        }),
        new QuestionModel({
          id: 'terceira',
          title: 'Você tem algum advogado cuidando do seu processo no momento?',
          type: QuestionType.MultipleChoice,
          // placeholder: 'Responda aqui...',
          helpText: 'Selecione uma opção',
          required: true,
          jump: { a: '_submit', b: 'quarta' },
          options: [
            new ChoiceOption({ label: 'Sim' }),
            new ChoiceOption({ label: 'Não' })
          ]
        }),
        new QuestionModel({
          id: 'quarta',
          title: 'Você teve alguma dessas situações?',
          type: QuestionType.MultipleChoice,
          // placeholder: 'Responda aqui...',
          helpText: 'Você pode selecionar várias opções',
          required: true,
          multiple: true,
          jump: { a: 'quinta', b: 'sexta', c: 'setima', d: 'oitava', e: 'nona', f: 'decima' },
          options: [
            new ChoiceOption({ label: 'Insalubridade e periculosidade' }),
            new ChoiceOption({ label: 'Contribuição em atraso' }),
            new ChoiceOption({ label: 'Ganhei uma ação trabalhista' }),
            new ChoiceOption({ label: 'Trabalhei em meio rural antes de 1991' }),
            new ChoiceOption({ label: 'Trabalhei ou trabalho no exterior' }),
            new ChoiceOption({ label: 'Nenhuma das alternativas' })
          ]
        })
      ],
      language: new LanguageModel({
        continue: 'Continuar',
        pressEnter: 'Pressione ENTER'
      })
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
