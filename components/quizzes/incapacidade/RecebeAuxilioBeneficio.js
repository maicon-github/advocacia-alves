import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'RecebeAuxilioBeneficio',
  title: 'Você está recebendo auxílio-doença/acidente ou outro benefício por incapacidade hoje?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim', value: 'a' }),
    new ChoiceOption({ label: 'Não', value: 'b' })
  ],
  jump: {
    a: 'BeneficioCessado',
    b: 'JaFezPedido'
  }
})
