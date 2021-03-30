import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'IncapacidadeInicial',
  title: 'BENEFÍCIOS POR INCAPACIDADE',
  content: 'Desenvolvemos uma forma de atender quem precisa de algum benefício por incapacidade sem precisar pagar nada agora. Você primeiro ganha o seu processo, recebe do INSS e paga só depois de garantirmos o seu direito. É uma forma de colaborarmos e trabalharmos juntos neste momento de pandemia. Vamos continuar?',
  description: 'P.S. já te enviamos um e-mail informativo respondendo as principais dúvidas sobre os benefícios por incapacidade. Vale a pena dar uma olhada!',
  type: QuestionType.SectionBreak
})
