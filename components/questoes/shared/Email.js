import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'email',
  title: 'Qual é o seu e-mail?',
  type: QuestionType.Text,
  placeholder: 'Responda aqui...',
  required: true,
  jump: 'ouviu'
})
