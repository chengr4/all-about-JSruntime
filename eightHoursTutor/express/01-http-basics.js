// https://github.com/john-smilga/node-express-course/blob/main/02-express-tutorial/final/01-http-basics.js

const http = require('http');

// 1. callback
const server = http.createServer((req, res) => {
  console.log('user hit the server');
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end() // signal the communication is over
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
});

//  invoke listen
server.listen(5000);