import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'JaFezPedido',
  title: 'Você já fez um pedido de benefício por incapacidade alguma vez?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim', value: 'a' }),
    new ChoiceOption({ label: 'Não', value: 'b' })
  ],
  jump: {
    a: 'BeneficioCortado',
    b: 'BeneficioCessado'
  }
})
