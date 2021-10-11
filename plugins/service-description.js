const services = [
  { key: 'consultas-e-calculos', value: 'Consultas e cálculos' },
  { key: 'revisoes', value: 'Revisões' },
  { key: 'planejamento-previdenciario-servidor-publico', value: 'Planejamento previdenciário servidor público' },
  { key: 'planejamento-previdenciario', value: 'Planejamento previdênciário' }
]

export default (context, inject) => {
  const serviceDescription = (key) => {
    const service = services.find(cat => cat.key === key)
    return service ? service.value : key
  }

  inject('serviceDescription', serviceDescription)

  context.$serviceDescription = serviceDescription
}
