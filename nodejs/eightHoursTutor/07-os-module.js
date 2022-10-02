const os = require('os'); // this case not use './' at the beginning

// info about current user
const user = os.userInfo();
console.log(user);
/*
{
  uid: 501,
  gid: 20,
  username: 'chengr4',
  homedir: '/Users/chengr4',
  shell: '/bin/zsh'
}
*/

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),// Darwin
  release: os.release(), // 20.6.0
  totalMem: os.totalmem(), // 17179869184 total memory
  freeMem: os.freemem(), // 265285632 free memory
};
console.log(currentOS);