import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'quarta',
  title: 'Você teve alguma dessas situações?',
  type: QuestionType.MultipleChoice,
  helpText: 'Você pode selecionar várias opções',
  required: true,
  multiple: true,
  jump: { a: 'quinta', b: 'sexta', c: 'setima', d: 'oitava', e: 'nona', f: 'decima' },
  options: [
    new ChoiceOption({ label: 'Insalubridade e periculosidade' }),
    new ChoiceOption({ label: 'Contribuição em atraso' }),
    new ChoiceOption({ label: 'Ganhei uma ação trabalhista' }),
    new ChoiceOption({ label: 'Trabalhei em meio rural antes de 1991' }),
    new ChoiceOption({ label: 'Trabalhei ou trabalho no exterior' }),
    new ChoiceOption({ label: 'Nenhuma das alternativas' })
  ]
})
