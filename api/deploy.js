import Bitbucket from 'bitbucket'

export default (req, res) => {
  const { secret, type, releases } = req.body

  if (process.env.PRISMIC_SECRET !== secret) {
    return res.status(401)
  }

  if (type !== 'api-update') {
    res.status(403)
    return res.json({ message: `Invalid type ${type}` })
  }

  const bitbucket = new Bitbucket({
    auth: { username: process.env.GIT_USERNAME, password: process.env.GIT_PASSWORD }
  })

  // bitbucket.commits
  //   .createApproval({ node: '', repo_slug: '', workspace: '' })
  //   .then(({ data, headers, status, url }) => {})
  //   .catch(({ message, error, headers, request, status }) => {})

  bitbucket.commits
    .createApproval({ repo_slug: process.env.GIT_REPOSITORY, workspace: process.env.GIT_WORKSPACE })
    .then(({ data, headers, status, url }) => {
      res.json({ data, headers, status, url })
    })
    .catch(({ message, error, headers, request, status }) => {
      res.status(500)
      res.json({ message, error, headers, request, status })
    })
}
