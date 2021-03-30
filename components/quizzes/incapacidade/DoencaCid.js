import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'DoencaCid',
  title: 'Informe os CID’s para as doenças que possui, se souber:',
  type: QuestionType.LongText,
  helpText: 'SHIFT+ENTER para quebrar a linha',
  placeholder: 'Responda aqui...',
  required: false,
  jump: () => 'DoencaDetalhe'
})
