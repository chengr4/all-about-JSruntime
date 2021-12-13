// https://github.com/john-smilga/node-express-course/blob/main/02-express-tutorial/final/01-http-basics.js

const http = require('http');

// 1. callback
const server = http.createServer((req, res) => {
  console.log('user hit the server');
  res.end('home page'); // signal the communication is over
});

//  invoke listen
server.listen(5000);