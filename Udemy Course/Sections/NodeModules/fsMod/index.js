const fs=require("fs");
fs.writeFileSync("hello.txt","hello in js file");
fs.appendFileSync("hello.txt","mann patel is appended");
fs.readFileSync("hello.txt",)

const utils=require("./utils");
console.log(utils.name);
console.log(utils.num);
console.log(utils.func())