import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'SituacaoInsalubreTempo',
  title: 'Por quantos anos você trabalhou com atividades insalubres ou perigosas?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Menos de 5 anos' }),
    new ChoiceOption({ label: 'Entre 5 a 15 anos' }),
    new ChoiceOption({ label: 'Entre 15 a 25 anos' }),
    new ChoiceOption({ label: 'Acima de 25 anos' })
  ],
  jump: () => 'ContribuicaoAtraso'
})
