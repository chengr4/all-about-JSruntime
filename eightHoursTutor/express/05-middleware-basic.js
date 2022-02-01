const express = require('express')
const app = express()

// req => middleware => res

// middleware
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  // (must) pass to next middleware
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
// In terminal returns: GET / 2021

app.get('/about', logger, (req, res) => {
  res.send('About')
})
// In terminal returns: GET /about 2021

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})