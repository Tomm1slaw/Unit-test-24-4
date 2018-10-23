const os = require('os');
const formatedDate = require('./index');
const uptime = formatedDate(os.uptime());

console.log(`Current uptime is ${uptime}`)