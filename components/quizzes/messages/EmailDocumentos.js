import { QuestionModel, QuestionType, LinkOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'EmailDocumentos',
  title: 'Ótimo.',
  content: 'Está quase tudo pronto para começarmos a te defender e buscar seus direitos! Acabamos de te enviar um email pedindo os documentos (CNIS, Carteira de Trabalho ou Senha do Meu INSS) para darmos continuidade ao seu atendimento. Abraços.',
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
