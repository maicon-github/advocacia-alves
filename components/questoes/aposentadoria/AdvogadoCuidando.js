import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'terceira',
  title: 'Você tem algum advogado cuidando do seu processo no momento?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  jump: { a: '_submit', b: 'quarta' },
  options: [
    new ChoiceOption({ label: 'Sim' }),
    new ChoiceOption({ label: 'Não' })
  ]
})
