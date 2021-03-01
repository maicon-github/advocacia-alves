import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'RevisaoAndamento',
  title: 'Você tem algum pedido de revisão em andamento?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Não', value: 'a' }),
    new ChoiceOption({ label: 'Sim, está no INSS', value: 'b' }),
    new ChoiceOption({ label: 'Sim, está na Justiça', value: 'c' })
  ],
  jump: {
    a: 'InicioRecebimento',
    b: 'RevisaoAdvogadoCuidando',
    c: 'RevisaoAdvogadoCuidando'
  }
})
