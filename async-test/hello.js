//
var fs=require('mz/fs');
module.exports=async ()=>{
    var expression=await fs.readFile('./data.txt','utf-8');
    var fn = new Function('return '+expression);
    var r=fn();
    console.log(`Calculate:${expression}=${r}`);
    console.log(r);
    return r;
}