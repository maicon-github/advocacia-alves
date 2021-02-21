
export default (req, res) => {
  
  res.status(200).json(req.headers.host)
}
