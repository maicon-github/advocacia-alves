import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'InicioRecebimento',
  title: 'Quando você começou a receber a sua aposentadoria?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'De 05/10/1998 a 04/04/1991', value: 'a' }),
    new ChoiceOption({ label: 'De 05/04/1991 a 31/12/2003', value: 'b' }),
    new ChoiceOption({ label: 'Outro período', value: 'c' })
  ],
  jump: {
    a: 'BuracoNegro',
    b: 'RevisaoTeto',
    c: 'InicioRecebimentoOutro'
  }
})
