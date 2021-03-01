import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'EticaProfissional',
  title: 'Obrigado por ter entrado em contato com a gente.',
  content: 'Nosso serviço atende somente pessoas que não possuem vínculo com outros(as) advogados(as), pois isso vai contra o Código de Ética da OAB, impossibilitando o atendimento.',
  type: QuestionType.SectionBreak
})
