const { log } = require("console");
const os = require("os");
//info about user
const user = os.userInfo();
console.log(user);
//method return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`);
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalMem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
