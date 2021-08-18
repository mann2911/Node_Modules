

const http=require("http");
const fs=require('fs');
const server=http.createServer((req,res)=>{
    
    if(req.url==="/"){
        
        res.write("welcome to the home page");
        res.end();
    }else if(req.url==="/contact"){
        res.write("contact page");
        res.end();
    }else if(req.url==="/about"){
        res.end("about page");
    }else if(req.url==="/userapi"){
        fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
            res.writeHead(200,{"content-type":"application/json"})
             res.end(data);
        })
        
    }
    else{
        res.writeHead(404,{"content-type":"text-html"})
        res.write("error page!!!");
        res.end();
    }
    
})

server.listen(8200,"127.0.0.1",()=>{
    console.log("server is listining to port no 8200");
})