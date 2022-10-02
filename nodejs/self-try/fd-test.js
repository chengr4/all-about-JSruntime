const fs = require('fs');

fs.open('./first.txt', 'r', (err, fd) => {
  console.log(fd);
});
