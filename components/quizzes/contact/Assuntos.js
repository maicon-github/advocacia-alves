import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'Assuntos',
  title: 'Sobre qual assunto previdenciário você procura ajuda?',
  type: QuestionType.MultipleChoice,
  helpText: 'A Advocacia Alves trabalha apenas com assuntos da previdência.',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Aposentadoria', value: 'a' }),
    new ChoiceOption({ label: 'Revisão', value: 'b' }),
    new ChoiceOption({ label: 'Benefício por incapacidade (doenças e acidente)', value: 'c' }),
    new ChoiceOption({ label: 'Contribuição em atraso', value: 'd' }),
    new ChoiceOption({ label: 'BPC/LOAS', value: 'e' }),
    new ChoiceOption({ label: 'Pensão por morte', value: 'f' }),
    new ChoiceOption({ label: 'Auxílio-emergencial governo', value: 'g' }),
    new ChoiceOption({ label: 'Ação do PASEP', value: 'h' }),
    new ChoiceOption({ label: 'Outro assunto previdenciário', value: 'i' })
  ],
  jump: {
    a: 'PedidoAndamento',
    b: 'RevisaoAndamento',
    c: '_submit',
    d: '_submit',
    e: '_submit',
    f: '_submit',
    g: '_submit',
    h: '_submit',
    i: '_submit'
  }
})
