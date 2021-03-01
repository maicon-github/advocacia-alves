import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'ContribuicaoAtrasoRecolherAtividade',
  title: 'Você realizava alguma atividade remunerada no período que pretende fazer o recolhimento em atraso?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim' }),
    new ChoiceOption({ label: 'Não' })
  ],
  jump: {
    a: 'ContribuicaoAtrasoRecolherAtividadeDocumentos',
    b: 'AcaoTrabalhista'
  }
})
