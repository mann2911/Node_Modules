const fs=require("fs");
const http=require("http");


const server=http.createServer();

server.on("request",(req,res)=>{
    
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err){return console.log(err)}
    //     res.end(data)
    // })

    const rstream = fs.createReadStream("inpust.txt");
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    })
    rstream.on("end",()=>{
        res.end();
    })
    rstream.on("error",(err)=>{
        res.end("file not found")
    })
})

server.listen(8200,"127.0.0.1");