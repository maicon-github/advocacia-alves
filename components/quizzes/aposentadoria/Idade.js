import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'Idade',
  title: 'E a sua idade?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Menos de 40 anos' }),
    new ChoiceOption({ label: 'Entre 40 e 50 anos' }),
    new ChoiceOption({ label: 'Entre 50 a 60 anos' }),
    new ChoiceOption({ label: 'Entre 60 a 65 anos' }),
    new ChoiceOption({ label: 'Acima de 65 anos' })
  ],
  jump: () => 'Deficiencia'
})
