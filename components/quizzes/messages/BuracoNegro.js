import { QuestionModel, QuestionType, LinkOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'BuracoNegro',
  title: 'Revisão indicada',
  content: 'Você provavelmente tem direito à revisão do buraco negro, que é válida para quem recebeu aposentadoria entre 05/10/1988 a 05/04/1991. O primeiro passo é analisar a possibilidade dessa revisão, quanto isso impacta no valor do seu benefício e se existem atrasados para receber',
  type: QuestionType.SectionBreak,
  description: 'Caso não queira continuar visite ',
  descriptionLink: [
    new LinkOption({
      url: 'https://www.advocaciaalves.com.br/blog',
      text: 'nosso blog',
      target: '_self'
    })
  ],
  jump: () => '_submit'
})
