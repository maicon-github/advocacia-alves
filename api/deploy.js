export default (req, res) => {
  const { secret, type, releases } = req.body

  res.json({
    secret: process.env.SECRET === secret,
    type,
    releases
  })
}
