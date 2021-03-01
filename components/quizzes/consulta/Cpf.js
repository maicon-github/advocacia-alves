import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'Cpf',
  type: QuestionType.Text,
  title: 'Qual é o seu CPF?',
  placeholder: 'Responda aqui...',
  helpText: 'O login do Meu INSS é o seu CPF. Iremos utilizar esses dados somente para tirar o extrato do seu CNIS',
  required: true,
  jump: () => 'Senha',
  mask: '###.###.###-##'
})
