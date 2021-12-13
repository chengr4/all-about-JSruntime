const http = require('http');

// 1. callback
const server = http.createServer((req, res) => {
  console.log('user hit the server');

  // MIME types
  res.writeHead(200, {'content-type':'text/html'});
  res.write('<p>home page</p>');
  res.end();
});

//  invoke listen
server.listen(5000);