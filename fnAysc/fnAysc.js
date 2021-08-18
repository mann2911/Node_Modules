const fs =require("fs");

fs.writeFile("read.txt","mann patel",(err)=>{
    console.log("completed insertions!!!")
})
fs.appendFile("read.txt","bhavana patel",(err)=>{
    console.log("insertions is completed!!!");
})

fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data)
})


// ------------------Tasks 2---------------------------
    	            
// fs.mkdir("thapa",(err)=>{
//     console.log("folder created!!!")
// });
// fs.writeFile("./thapa/bio.txt","mann jkdsnjcv",(err)=>{
//     console.log("created file successfully!!!");
// })
// fs.appendFile("./thapa/bio.txt","garv aptel",(err)=>{
//     console.log("apped");
// })
// console.log(fs.readFile("./thapa/bio.txt","UTF-8",(err,data)=>{
//     console.log(data);
// }))
// fs.rename("./thapa/bio.txt","bios.txt",(err)=>{
//     console.log("rename done")
// })
// fs.unlink("./bios.txt",(err)=>{
//     console.log("done delete file");
// });
// fs.rmdir("./thapa",(err)=>{
//     console.log("dir deleted");
// })