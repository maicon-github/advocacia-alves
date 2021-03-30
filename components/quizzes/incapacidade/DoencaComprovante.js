import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'DoencaComprovante',
  title: 'Você tem documentos médicos que comprovem sua incapacidade? Você pode selecionar mais de um, ok?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  multiple: true,
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Não tenho nenhum documento', value: 'a' }),
    new ChoiceOption({ label: 'Atestados', value: 'b' }),
    new ChoiceOption({ label: 'Receitas', value: 'c' }),
    new ChoiceOption({ label: 'Exames', value: 'd' }),
    new ChoiceOption({ label: 'Prontuários médicos', value: 'e' }),
    new ChoiceOption({ label: 'Outros ', value: 'f' })
  ],
  jump: () => 'PagamentoExtendido'
})
