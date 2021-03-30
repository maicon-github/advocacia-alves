import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'PedidoNegadoData',
  title: 'Quando o benefício foi negado?',
  type: QuestionType.Text,
  mask: '##/##/####',
  placeholder: 'Ex: De 01/01/2020',
  required: true,
  jump: () => '_submit'
})
