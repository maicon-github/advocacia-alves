import { QuestionModel, QuestionType, LinkOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'DezenasRevisoes',
  title: 'Existem dezenas de revisões',
  content: 'Desde a famosa Revisão da Vida Toda, Revisão do Buraco Negro até análise de cada período e salário considerado para calcular o seu benefício. O primeiro passo é analisar qual revisão você tem direito, quanto isso impacta no valor do seu benefício e se existem atrasados.',
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
