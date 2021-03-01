import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'BeneficioMelhor',
  title: 'Você já teve uma aposentadoria concedida, não sacou, e quer saber se tem direito a um benefício melhor?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim' }),
    new ChoiceOption({ label: 'Não' })
  ],
  jump: () => 'Idade'
})
