import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'RevisaoTeto',
  title: 'Você provavelmente tem direito à Revisão do Teto 10.',
  content: 'Essa revisão é válida para quem recebeu aposentadoria ou pensão entre 05/04/1991 a 31/12/2003. O primeiro passo é analisar a possibilidade dessa revisão, quanto isso impacta no valor do seu benefício e se existem atrasados para receber.',
  type: QuestionType.SectionBreak
})
