import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'PedidoNegado',
  title: 'Você já fez o pedido e ele foi negado?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim', value: 'a' }),
    new ChoiceOption({ label: 'Não', value: 'b' })
  ],
  jump: {
    a: 'PedidoNegadoData',
    b: 'BeneficioCessado'
  }
})