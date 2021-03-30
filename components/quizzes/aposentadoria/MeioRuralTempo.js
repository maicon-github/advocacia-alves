import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'MeioRuralTempo',
  title: 'Quanto tempo você trabalhou no meio rural antes de 1991, após ter completado 8 anos?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Até 4 anos' }),
    new ChoiceOption({ label: 'De 4 a 6 anos' }),
    new ChoiceOption({ label: 'Mais de 6 anos' })
  ],
  jump: () => 'TrabalhouExterior'
})
