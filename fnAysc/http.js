const http=require('http');
const url=require('url')
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q=url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
}).listen(8080)