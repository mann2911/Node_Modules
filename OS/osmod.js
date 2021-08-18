const os=require('os');

console.log(os.arch());
console.log(os.EOL);
console.log(os.cpus());
console.log(`free memory=${os.freemem()/1024/1024/1024}`)
console.log(`total memory=${os.totalmem()/1024/1024/1024}`)
console.log("network address"+JSON.stringify(os.networkInterfaces()));