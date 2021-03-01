import { QuestionModel, QuestionType, LinkOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'AtividadePrivada',
  title: 'Perfeito!',
  content: 'Chegou o momento de descobrir qual é o melhor caminho para você! Vamos realizar uma conversa de 15 minutos com um advogado especialista em direito previdenciário para descobrir se vai precisar de um processo ou se precisa de uma análise completa orientando como você pode resolver tudo sozinho. Você não vai precisar pagar nada nessa conversa, pois ela vem antes de qualquer consulta ou serviço pago. Você deseja conversar com um advogado especialista para analisar qual o melhor caminho para você? Aperte "continuar" para darmos prosseguimento e agendar a conversa com um de nossos advogados.',
  type: QuestionType.SectionBreak,
  description: 'Caso não queira continuar visite ',
  jump: () => '_submit',
  descriptionLink: [
    new LinkOption({
      url: 'https://www.advocaciaalves.com.br/blog',
      text: 'nosso blog',
      target: '_self'
    })
  ]
})
