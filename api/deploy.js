// import { Bitbucket } from 'bitbucket'
// import { v4 as uuidv4 } from 'uuid'
import { exec } from 'child_process'

export default (req, res) => {
  const { secret, type } = req.body

  if (process.env.PRISMIC_SECRET !== secret) {
    return res.status(401)
  }

  if (type !== 'api-update') {
    res.status(403)
    return res.json({ message: `Invalid type ${type}` })
  }

  exec('vercel', (error, stdout, stderr) => {
    if (error) {
      res.json({ message: `error: ${error.message}` })
      return
    }
    if (stderr) {
      res.json({ message: `error: ${error.message}` })
      return
    }
    res.json({ message: `stdout: ${stdout}` })
  })
}
