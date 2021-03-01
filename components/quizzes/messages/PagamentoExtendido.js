import { QuestionModel, QuestionType, LinkOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'PagamentoExtendido',
  title: 'Você NÃO vai pagar nada para começar este processo. ',
  content: 'Você primeiro ganha o seu processo, recebe do INSS e paga só depois de ganharmos seu pedido. Estamos fazendo esta isenção para ajudar neste momento de pandemia. Ficou claro?',
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
