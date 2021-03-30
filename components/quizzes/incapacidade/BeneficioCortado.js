import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'BeneficioCortado',
  title: 'Você recebia o seu benefício por incapacidade e ele foi cortado?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim', value: 'a' }),
    new ChoiceOption({ label: 'Não', value: 'b' })
  ],
  jump: {
    a: 'BeneficioCortadoData',
    b: 'PedidoNegado'
  }
})
