const { createHmac } = require('crypto');

const secretKey = 'mipa';
const msg = 'apple';

const hmac = createHmac('sha256',secretKey).update(msg).digest('hex');

