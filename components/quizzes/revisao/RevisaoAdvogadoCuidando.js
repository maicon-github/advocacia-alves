import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'RevisaoAdvogadoCuidando',
  title: 'Você tem algum advogado cuidando do seu processo no momento?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Sim', value: 'a' }),
    new ChoiceOption({ label: 'Não', value: 'b' })
  ],
  jump: {
    a: 'EticaProfissional',
    b: 'InicioRecebimento',
    c: 'InicioRecebimento'
  }
})
