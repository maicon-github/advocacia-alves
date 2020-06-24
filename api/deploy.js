import { Bitbucket } from 'bitbucket'
import { v4 as uuidv4 } from 'uuid'
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
//   const bitbucket = new Bitbucket({
//     auth: { username: process.env.GIT_USERNAME, password: process.env.GIT_PASSWORD }
//   })

//   bitbucket.commits
//     .list({
//       repo_slug: process.env.GIT_REPOSITORY,
//       workspace: process.env.GIT_WORKSPACE
//     })
//     .then(({ data, headers, status, url }) => {
//       if (data.values.length === 0) {
//         res.json({ message: 'No commit to deploy' })
//         return
//       }

//       bitbucket.commitstatuses
//         .createBuildStatus({
//           node: data.values[0].hash,
//           repo_slug: process.env.GIT_REPOSITORY,
//           workspace: process.env.GIT_WORKSPACE,
//           _body: { state: 'SUCCESSFUL', url: 'http://google.com', key: uuidv4() }
//         })
//         .then(({ data, headers, status, url }) => {
//           res.json({ message: 'Deployed' })
//         })
//         .catch(({ message, error, headers, request, status }) => {
//           res.status(500)
//           res.json({ message, error })
//         })
//     })
//     .catch(({ message, error, headers, request, status }) => {
//       res.status(500)
//       res.json({ message, error })
//     })
}
