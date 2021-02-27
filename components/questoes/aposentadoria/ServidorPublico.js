import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'servidor-publico',
  title: 'Você é servidor público hoje?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  jump: 'pedido-andamento',
  options: [
    new ChoiceOption({ label: 'Não' }),
    new ChoiceOption({ label: 'Sim, servidor CLT' }),
    new ChoiceOption({ label: 'Sim, servidor com regime próprio' })
  ]
})
