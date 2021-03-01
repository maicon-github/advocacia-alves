import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'InicioRecebimentoOutro',
  title: 'Em que ano você começou a receber a sua aposentadoria?',
  type: QuestionType.Text,
  placeholder: 'Responda aqui...',
  required: true,
  mask: '####',
  jump: () => 'DezenasRevisoes'
})
