import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'assuntos',
  title: 'Sobre qual assunto previdenciário você procura ajuda?',
  type: QuestionType.MultipleChoice,
  helpText: 'A Advocacia Alves trabalha apenas com assuntos da previdência.',
  required: true,
  jump: '_submit',
  options: [
    new ChoiceOption({ label: 'Aposentadoria' }),
    new ChoiceOption({ label: 'Revisão' }),
    new ChoiceOption({ label: 'Benefício por incapacidade (doenças e acidente)' }),
    new ChoiceOption({ label: '+Contribuição em atraso' }),
    new ChoiceOption({ label: 'BPC/LOAS' }),
    new ChoiceOption({ label: 'Pensão por morte' }),
    new ChoiceOption({ label: 'Auxílio-emergencial governo' }),
    new ChoiceOption({ label: 'Ação do PASEP' }),
    new ChoiceOption({ label: 'Outro assunto previdenciário' })
  ]
})
