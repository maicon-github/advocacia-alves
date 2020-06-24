export default (req, res) => {
  const secret = req.body.body.secret

  res.json({
    secret: process.env.SECRET === secret
  })
}
