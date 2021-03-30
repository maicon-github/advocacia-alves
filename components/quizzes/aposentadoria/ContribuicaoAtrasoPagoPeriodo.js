import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'ContribuicaoAtrasoPagoPeriodo',
  title: 'Informe qual o período que você pagou em atraso',
  type: QuestionType.Text,
  mask: 'De ##/##/#### a ##/##/####',
  placeholder: 'Ex: De 01/01/2020 á 01/12/2020',
  required: true,
  jump: () => 'AcaoTrabalhista'
})
