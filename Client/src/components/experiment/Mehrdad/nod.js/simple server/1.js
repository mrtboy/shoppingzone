var http=require("http");
http.createServer(function (req,res){
res.writeHead(200,{"Content-Type": "Text/Plain"});
res.end("HEloo");
}).listen(9000,"127.0.0.1");
console.log("Hiiiiiiii");