import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'Senha',
  type: QuestionType.Text,
  title: 'Qual é a senha do Meu INSS?',
  placeholder: 'Responda aqui...',
  helpText: 'Se você não tiver acesso agora, não tem problema. Basta finalizar esse formulário e nós vamos entrar em contato por e-mail pedindo o login e senha',
  required: true,
  jump: 'mensagem3'
})
