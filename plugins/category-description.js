const categories = [
  { key: 'aposentadoria', value: 'Aposentadoria' },
  { key: 'auxilio', value: 'Auxílio' },
  { key: 'bpc-loas', value: 'BPC - LOAS' },
  { key: 'dica', value: 'Dicas' },
  { key: 'revisao', value: 'Revisão' },
  { key: 'salario-maternidade', value: 'Salário maternidade' },
  { key: 'pensao', value: 'Pensão' }
]

export default (context, inject) => {
  const categoryDescription = (key) => {
    const category = categories.find(cat => cat.key === key)
    return category ? category.value : key
  }

  inject('categoryDescription', categoryDescription)

  context.$categoryDescription = categoryDescription
}
