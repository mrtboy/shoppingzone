var http=require ("http");
var url=require("url");
var controller=function(req,res){

    var message="";
    switch(req.method){
        case "get":message="that get";break;
        case "post":message="post";break;
        case "put":message="put";break;
        case "delete":message="delete"; break;

    }
res.writeHead(200,{"content-type":"text/html"});
res.end(message + "\n");
}
http.createServer(controller).listen(8005,"127.0.0.1");
console.log("server run");
