import validator from 'validator'
import xssFilters from 'xss-filters'
import zcrmsdk from 'zcrmsdk'

export default (req, res) => {
  const { name, email, phone } = req.body

  const attributes = ['name', 'email', 'phone']

  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    return res.status(422).json({ message: 'Não foi possível agendar.', value: sanitizedAttributes })
  }

  zcrmsdk.initialize({
    client_id: '1000.GMS0S8RRJG7805AZ45KS5PW3WTP42H', // mandatory
    client_secret: '05f226c697724129ca0c4f3bbf1fa9a03f8866a103', // mandatory
    redirect_url: 'https://advocacia-alves.daniellv.vercel.app/'// mandatory
  }).then(function () {
    zcrmsdk.API.MODULES.post({
      module: 'Leads',
      params: { name, email, phone }
    })
  })
}

const rejectFunctions = new Map([
  ['name', v => v.trim() === '' || v.length < 4],
  ['phone', v => v.trim() === '' || v.length < 11],
  ['email', v => v.trim() !== '' && !validator.isEmail(v)]
])

const validateAndSanitize = (key, value) => {
  return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}
