import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'ContribuicaoAtrasoRecolher',
  title: 'Qual período você tem interesse de recolher em atraso?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Referente aos últimos 5 anos' }),
    new ChoiceOption({ label: 'Anterior aos últimos 5 anos' })
  ],
  jump: {
    a: 'AcaoTrabalhista',
    b: 'ContribuicaoAtrasoRecolherAtividade'
  }
})
