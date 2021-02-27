import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'nome',
  title: 'Qual é o seu nome?',
  type: QuestionType.Text,
  placeholder: 'Responda aqui...',
  required: true,
  jump: 'telefone'
})
