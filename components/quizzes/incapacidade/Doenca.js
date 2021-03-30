import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'Doenca',
  title: 'Quais são as doenças que você possui?',
  type: QuestionType.LongText,
  helpText: 'SHIFT+ENTER para quebrar a linha',
  placeholder: 'Responda aqui...',
  required: true,
  jump: () => 'DoencaCid'
})
