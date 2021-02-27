import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'pedido-andamento',
  title: 'Você tem algum pedido de aposentadoria em andamento?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  jump: { a: 'quarta', b: 'advogado-cuidando', c: 'advogado-cuidando' },
  options: [
    new ChoiceOption({ label: 'Não', value: 'quarta' }),
    new ChoiceOption({ label: 'Sim, servidor CLT', value: 'terceira' }),
    new ChoiceOption({ label: 'Sim, servidor com regime próprio', value: 'terceira' })
  ]
})
