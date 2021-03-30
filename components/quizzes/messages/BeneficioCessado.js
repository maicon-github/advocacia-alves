import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'BeneficioCessado',
  title: 'Obrigado por entrar em contato com a gente',
  content: 'Por enquanto nosso serviço rápido 100% à distância atende somente pessoas que já tiveram um pedido negado ou cortado. Se você está recebendo auxílio doença, podemos te ajudar somente quando o benefício for cessado.',
  type: QuestionType.SectionBreak
})
