import { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

export default new QuestionModel({
  id: 'DoencaDetalhe',
  title: 'Explique detalhadamente quais são os sintomas das doenças e como elas prejudicam você trabalhar na sua área? O que mais importa pra gente é o que você sente e não o que o médico fala.',
  type: QuestionType.LongText,
  helpText: 'SHIFT+ENTER para quebrar a linha',
  placeholder: 'Responda aqui...',
  required: true,
  jump: () => 'DoencaComprovante'
})
