const os = require('os');

const user = os.userInfo();

//methods retuurns the system uptime in seconds

console.log(user);
console.log(`system uptime is ${os.uptime()} seconds` )

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)