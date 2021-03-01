import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'Acesso',
  title: 'Você tem acesso a algum desses documentos?',
  type: QuestionType.MultipleChoice,
  helpText: 'Se você não tiver acesso agora, não tem problema. Nós vamos te pedir por e-mail',
  required: true,
  jump: {
    a: 'Cpf',
    b: 'Cpf',
    c: 'Cpf',
    d: 'EmailDocumentos'
  },
  options: [
    new ChoiceOption({ label: 'Extrato CNIS', value: 'a' }),
    new ChoiceOption({ label: 'Carteira de trabalho', value: 'b' }),
    new ChoiceOption({ label: 'Login e Senha do Meu INSS', value: 'c' }),
    new ChoiceOption({ label: 'Não tenho acesso no momento', value: 'd' })
  ]
})
