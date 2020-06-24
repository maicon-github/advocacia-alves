export default (req, res) => {
  const { secret, type, releases } = req.body

  if (process.env.SECRET !== secret) {
    return res.status(401)
  }

  if (type !== 'api-update') {
    res.status(403)
    return res.json({ message: `Invalid type ${type}` })
  }

  res.json({ releases })
}
