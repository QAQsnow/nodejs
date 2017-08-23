//导入http模块
var http=require("http");

var servce=http.createServer(function(req,res){
    //请求的方式和请求的路径
    console.log(req.method+":"+req.url);
    //将HTTP响应200写入response,同时设置Content-Type:text/html
    res.writeHead(200,{'Content-Type':"text/html"});
    res.end('hello, world!');
});

//监听8080端口
servce.listen(8080);

console.log("Server is running at http://127.0.0.1:8080/");