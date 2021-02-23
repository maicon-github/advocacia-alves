import axios from 'axios'

export default (req, res) => {
  const { name, email, phone, token } = req.body

  axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${token}`)
    .then((recaptcha) => {
      if (recaptcha.data.success) {
        const config = {
          client_id: process.env.ZOHO_CLIENT_ID,
          client_secret: process.env.ZOHO_CLIENT_SECRET,
          redirect_url: process.env.ZOHO_REDIRECT_URL,
          refresh_token: process.env.ZOHO_REFRESH_TOKEN,
          iamurl: 'accounts.zoho.com',
          base_url: 'www.zohoapis.com',
          user_identifier: process.env.ZOHO_USER_IDENTIFIER
        }
      
        axios.post(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${config.refresh_token}&client_id=${config.client_id}&client_secret=${config.client_secret}&grant_type=refresh_token`)
          .then((auth) => {
          
            axios({
              method: 'post',
              url: 'https://www.zohoapis.com/crm/v2/Leads',
              headers: { authorization: `Zoho-oauthtoken ${auth.data.access_token}` },
              data: { data: [{ Email: email, Last_Name: name, Phone: phone.replace(/\D/g, '') }] }
            })
              .then((lead) => {
                res.status(200)
              })
              .catch((err) => {
                res.status(400)
              })

          })
          .catch((err) => {
            res.status(400)
          })

      } else {
        res.status(400)
      }
    }).catch((err) => {
      res.status(400)
    })
}
