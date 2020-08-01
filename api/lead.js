import axios from 'axios'

export default (req, res) => {
  // const { name, email, phone } = req.body

  const config = {
    client_id: process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    redirect_url: process.env.ZOHO_REDIRECT_URL,
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
    iamurl: 'accounts.zoho.com',
    base_url: 'www.zohoapis.com',
    user_identifier: process.env.ZOHO_USER_IDENTIFIER,
  }

  axios.post(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${config.refresh_token}&client_id=${config.client_id}&client_secret=${config.client_secret}&grant_type=refresh_token`)
    .then((json) => {
      res.status(200).send(json)
    })
    .catch((error) => {
      res.send(error)
    })

  // let headers = {
  //   Authorization: 'Zoho-oauthtoken ' + config.accessToken,
  //   'Content-Type': 'application/json'
  // }

  // request.post({url, body:lead, headers, json: true}, function (err, response, body) {
  //     console.log("Zoho crm response", err, body);
  //     if (err) {
  //         console.log("Failed to add as lead in Zoho CRM. Error: ", err);
  //     }
  //     console.log("TESTING ZOHO API V2",body.data[0].details);              
  // });
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
