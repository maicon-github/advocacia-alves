import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'Email',
  title: 'Qual é o seu e-mail?',
  type: QuestionType.Email,
  placeholder: 'Responda aqui...',
  required: true
})
