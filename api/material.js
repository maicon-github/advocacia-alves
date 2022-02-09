import axios from 'axios'

export default (req, res) => {
  const { name, email, phone, interesses, token } = req.body

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
          user_identifier: process.env.ZOHO_USER_IDENTIFIER,
          auth_token: '9ff7d2d661dcc5560ea138a1851da70a'
        }
      
        axios.post(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${config.refresh_token}&client_id=${config.client_id}&client_secret=${config.client_secret}&grant_type=refresh_token`)
          .then((auth) => {

            const promisses = interesses.map(interesse => {
              return axios({
                method: 'post',
                headers: { authorization: `Zoho-oauthtoken ${auth.data.access_token}` },
                url: `https://campaigns.zoho.com/api/json/listsubscribe?scope=CampaignsAPI&resfmt=JSON&authtoken=${config.auth_token}&listkey=${interesse}&contactinfo={"First Name":"${name}","Contact Email":"${email}","Phone":"${phone.replace(/\D/g, '')}"}`,
                data: {}
              }).then(function() {
                return { success: true }
              })
              .catch( _ => {
                return { success: false }
              })
            })

            Promise.all(promisses)
              .then(function(values) {
                res.status(200).json({})
              })
              .catch( _ => {
                res.status(400).json({})
              })
          })
          .catch( _ => {
            res.status(400).json({})
          })
      } else {
        res.status(400).json({})
      }
    }).catch( _ => {
      res.status(400).json({})
    })
}
