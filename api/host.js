
export default (req, res) => {
  // console.log(JSON.stringify(req.headers["sec-"]))
  res.status(200).json(req.headers["sec-fetch-site"])
}
