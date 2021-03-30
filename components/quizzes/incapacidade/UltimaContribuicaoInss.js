import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'UltimaContribuicaoInss',
  title: 'Em que mês/ano foi a sua última contribuição para o INSS?',
  type: QuestionType.Text,
  mask: '##/####',
  placeholder: 'Ex: 01/2020',
  required: true,
  jump: () => 'Doenca'
})
