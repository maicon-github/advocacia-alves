import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'BeneficioCortadoTempo',
  title: 'Por quanto tempo você recebeu o auxílio?',
  type: QuestionType.MultipleChoice,
  helpText: 'Selecione uma opção',
  required: true,
  nextStepOnAnswer: true,
  options: [
    new ChoiceOption({ label: 'Menos de 3 meses', value: 'a' }),
    new ChoiceOption({ label: 'De 3 meses a 1 ano', value: 'b' }),
    new ChoiceOption({ label: 'De 1 ano a 3 anos', value: 'c' }),
    new ChoiceOption({ label: '3 ou mais anos', value: 'd' })
  ],
  jump: () => 'UltimaContribuicaoInss'
})
