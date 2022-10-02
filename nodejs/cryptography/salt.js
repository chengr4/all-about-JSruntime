const { randomBytes, scryptSync, timingSafeEqual } = require('crypto');

let user;

function signUp(email, password) {
  const salt = randomBytes(16).toString('hex');
  // key length: 64
  const hasedPassword = scryptSync(password, salt, 64);
  console.log(hasedPassword);

  user = {
    email,
    password: `${salt}:${hasedPassword}`
  }
}


function login(email, password) {
  const [salt, key] = user.password.split(':');
  const hasedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, 'hex');
  const match = timingSafeEqual(hasedBuffer, keyBuffer); // 還沒搞清楚這個 api
}

signUp('fefae', 'fefe');

console.log(user);
