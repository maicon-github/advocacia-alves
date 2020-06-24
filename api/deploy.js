export default (req, res) => {
  const secret = req.body.secret || ''

  res.json({
    secret: process.env.SECRET === secret
  })
}
