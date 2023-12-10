const path = require("path");



// console.log(path.sep)

const filepath = path.join("./content", "subfolder", "test.txt")
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);



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