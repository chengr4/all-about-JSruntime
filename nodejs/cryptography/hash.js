const { createHash } = require('crypto');

// create a string hash
function makeHash(input) {

  // return 256-bit "digest"
  // format: base64
  return createHash('sha256').update(input).digest('base64'); 
}

console.log(makeHash("fefefefe"));