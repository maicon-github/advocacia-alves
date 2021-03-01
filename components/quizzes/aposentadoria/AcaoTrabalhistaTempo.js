import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'AcaoTrabalhistaTempo',
  title: 'Quanto tempo você teve reconhecido na reclamatória trabalhista?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  jump: () => 'AcaoTrabalhistaTempoDetalhe',
  options: [
    new ChoiceOption({ label: 'Menos de 1 ano' }),
    new ChoiceOption({ label: 'Entre 2 a 4 anos' }),
    new ChoiceOption({ label: 'Acima de 4 anos' })
  ]
})
