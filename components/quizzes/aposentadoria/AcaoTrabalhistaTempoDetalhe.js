import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'AcaoTrabalhistaTempoDetalhe',
  title: 'Você tem algum detalhe para comentar sobre a reclamatória trabalhista que ganhou?',
  type: QuestionType.LongText,
  helpText: 'SHIFT+ENTER para quebrar a linha',
  placeholder: 'Responda aqui...',
  required: true,
  jump: () => 'MeioRural'
})
