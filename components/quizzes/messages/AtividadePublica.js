import { QuestionModel, QuestionType, LinkOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'AtividadePublica',
  title: 'PLANEJAMENTO PREVIDENCIÁRIO SERVIDORES',
  content: 'O Alves, todo o ano, ajuda centenas de servidores a conquistar seus direitos e evitar perder dinheiro e tempo na aposentadoria. E não importa se faltam alguns anos para você se aposentar, nós podemos te ajudar. Por isso, criamos uma solução para resolver o seu caso e te deixar tranquilo quando chegar o tão sonhado momento de se aposentar. O primeiro passo para te ajudarmos é o planejamento previdenciário.',
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
