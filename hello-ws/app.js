var WebSocket=require('ws');

const WebSocketServer=WebSocket.Server;

//实例化

var wss=new WebSocketServer({
    port:8080
});


wss.on('connection',function(ws){
    console.log(`[SERVER] connection()`);
    ws.on('message',function(message){
        console.log(`[SERVER] Receieved： ${message}`);
        ws.send(`ECHO：${message}`,(err)=>{
            if(err){
                console.log(`[SERVER] error:${err} 你是猪`);
            }
        })
    })
})