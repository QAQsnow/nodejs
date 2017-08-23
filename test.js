process.nextTick(function(){
    console.log('nextTick callback');
})
console.log('nextTick was set');

process.on('exit',function(){
    console.log('程序结束执行的函数')
})

if(typeof(window)==='undefind'){
    console.log('ser lan:nodejs')
}else{
    console.log('client lan:js')
}

var fs=require('fs');
/*fs.readFile('my.txt','utf-8',function(err,data){
    console.log(err,data)
})*/

fs.stat('my.txt',function(err,state){
    if(err){
        console.log(err);
    }else{
        console.log("is file :" +state.isFile());
        console.log("isDirectory: " +state.isDirectory());
        if(state.isFile()){
            console.log("size :" +state.size);
            console.log("birth time: "+state.birthtime.toLocaleTimeString());
            console.log("modified time: "+state.mtime);
        }
    }
})

var rs=fs.createReadStream('my.txt','utf-8');

rs.on('data',function(chunk){
    console.log("data: "+chunk);
})
rs.on('end',function(){
    console.log('END');
})

rs.on('error',function(err){
    console.log("ERROR: "+err);
});