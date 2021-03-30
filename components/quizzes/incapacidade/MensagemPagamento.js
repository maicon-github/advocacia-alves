import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'MensagemPagamento',
  title: 'Você NÃO vai pagar nada para começar este processo. ',
  content: 'Você primeiro ganha o seu processo, recebe do INSS e paga só depois de ganharmos seu pedido. Estamos fazendo esta isenção para ajudar neste momento de pandemia. Ficou claro?',
  type: QuestionType.SectionBreak,
  description: 'Caso não queira continuar visite ',
  jump: () => '_submit'
})
