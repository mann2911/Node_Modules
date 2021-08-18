
const fs=require("fs");

fs.writeFileSync("read.txt","mann is the best");
fs.appendFileSync("read.txt","mann is the best");
fs.appendFileSync("read.txt","mann is the bestl;fsl;");

//buffer data while fecthing data over recing the data
console.log(fs.readFileSync("read.txt").toString());
fs.renameSync("read.txt","readandwrite.txt")