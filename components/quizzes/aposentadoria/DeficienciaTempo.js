import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'DeficienciaTempo',
  title: 'Qual é a sua deficiência e desde quando a tem?',
  type: QuestionType.LongText,
  helpText: 'SHIFT+ENTER para quebrar a linha',
  placeholder: 'Responda aqui...',
  required: true,
  jump: () => 'ServidorPublico'
})
