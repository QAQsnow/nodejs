//

module.exports=function(...rest){
    var sum=0;
    for(var n of rest){
        sum+=n;
    }
    return sum;
};