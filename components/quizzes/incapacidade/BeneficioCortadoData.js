import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'BeneficioCortadoData',
  title: 'Quando o benefício foi cortado?',
  type: QuestionType.Text,
  mask: '##/##/####',
  placeholder: 'Ex: De 01/01/2020',
  required: true,
  jump: () => 'BeneficioCortadoTempo'
})
