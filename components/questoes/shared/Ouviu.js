import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'ouviu',
  title: 'Como você ouviu falar de nós?',
  type: QuestionType.MultipleChoice,
  helpText: 'Você pode selecionar várias opções',
  required: true,
  multiple: true,
  jump: 'assuntos',
  options: [
    new ChoiceOption({ label: 'Pesquisei no Google' }),
    new ChoiceOption({ label: 'Vídeo do YouTube' }),
    new ChoiceOption({ label: 'Facebook' }),
    new ChoiceOption({ label: 'Instagram' }),
    new ChoiceOption({ label: 'E-mail' }),
    new ChoiceOption({ label: 'Indicação de amigos/família' }),
    new ChoiceOption({ label: 'Já fui cliente' }),
    new ChoiceOption({ label: 'Outro' })
  ]
})
