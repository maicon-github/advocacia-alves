export default (req, res) => {
  const { secret, type, releases } = req.body

  if (process.env.SECRET === secret) {
    if (type === 'api-update') {
      res.json({ releases })
    }

    res.status(403)
    res.json({ message: `Invalid type ${type}` })
  }

  res.status(401)
}
