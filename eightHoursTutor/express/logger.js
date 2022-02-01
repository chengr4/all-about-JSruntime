// middleware
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  // (must) pass to next middleware
  next()
}

module.exports = logger;