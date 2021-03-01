import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'TempoContribuicaoTotal',
  title: 'Qual é o seu tempo de contribuição total no exterior e no Brasil? ',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Menos de 15 anos' }),
    new ChoiceOption({ label: 'Entre 15 a 25 anos' }),
    new ChoiceOption({ label: 'Entre 25 a 30 anos' }),
    new ChoiceOption({ label: 'Entre 30 a 35 anos' }),
    new ChoiceOption({ label: 'Acima de 35 anos' })
  ],
  jump: () => 'BeneficioMelhor'
})
