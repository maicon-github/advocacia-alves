import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  title: 'Olá! Primeiro passo, um compromisso com a sua segurança.',
  content: 'Para indicar a melhor solução para o seu caso, precisamos de alguns dados como e-mail, nome, tempo de contribuição e idade. Você aceita que a Advocacia Alves trate os seus dados e entre em contato contigo para indicar o melhor serviço previdenciário, ciente de que eles não serão usados para nenhum outro fim?',
  type: QuestionType.SectionBreak
})
