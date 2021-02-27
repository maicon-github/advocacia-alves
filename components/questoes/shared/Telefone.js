import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'telefone',
  title: 'Qual é o seu telefone?',
  type: QuestionType.Phone,
  placeholder: 'Responda aqui...',
  required: true,
  jump: 'email'
})
