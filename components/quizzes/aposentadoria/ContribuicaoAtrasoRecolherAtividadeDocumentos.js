import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'ContribuicaoAtrasoRecolherAtividadeDocumentos',
  title: 'Você tem documentos que comprovam você ter realizado atividade nesse período?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim' }),
    new ChoiceOption({ label: 'Não' })
  ],
  jump: () => 'AcaoTrabalhista'
})
