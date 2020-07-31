// import zcrmsdk from '@trifoia/zcrmsdk'

export default (req, res) => {
  res.json(
    {
      client_id: process.env.ZOHO_CLIENT_ID,
      redirect_url: process.env.ZOHO_REDIRECT_URL,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      user_identifier: process.env.ZOHO_USER_IDENTIFIER,
      mysql_module: 'local'
    }
  )
  // const { name, email, phone } = req.body

  // zcrmsdk.initialize({
  //   client_id: process.env.ZOHO_CLIENT_ID,
  //   redirect_url: process.env.ZOHO_REDIRECT_URL,
  //   client_secret: process.env.ZOHO_CLIENT_SECRET,
  //   refresh_token: process.env.ZOHO_REFRESH_TOKEN,
  //   user_identifier: process.env.ZOHO_USER_IDENTIFIER,
  //   mysql_module: 'local'
  // }).then((client) => {
  //   client.API.MODULES.post({
  //     module: 'Leads',
  //     body: { data: [{ Email: email, Last_Name: name, Phone: phone.replace(/\D/g, '') }] }
  //   }).then(data => res.status(200).json(JSON.parse(data.body)))
  //     .catch(err => res.status(400).json(err))
  // })
}
