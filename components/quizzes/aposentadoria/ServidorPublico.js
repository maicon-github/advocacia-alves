import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'ServidorPublico',
  title: 'Você é servidor público hoje?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Não', value: 'a' }),
    new ChoiceOption({ label: 'Sim, servidor CLT', value: 'b' }),
    new ChoiceOption({ label: 'Sim, servidor com regime próprio', value: 'c' })
  ],
  jump: {
    a: 'AtividadePrivada',
    b: 'AtividadePublica',
    c: 'AtividadePublica'
  }
})
