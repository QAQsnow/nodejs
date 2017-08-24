//加载读取文件模块
var fs=require('fs');
//根据请求的方法做对应的处理
function addMapping(router,mapping){
    //遍历获得模块对象
    for(var url in mapping){
        if(url.startsWith('GET ')){
            var path=url.substring(4);
            router.get(path,mapping[url]);
            console.log(`login URL mapping:GET ${path}`);
        }else if(url.startsWith('POST ')){
            var path=url.substring(5);
            router.post(path,mapping[url]);
            console.log(`lognin URL mapping:POST ${path}`);
        }else{
            console.log(`invalid URL:${url}`);
        }
    }
}

function addControllers(router,dir){
    console.log(dir);
    var files=fs.readdirSync(__dirname+"/"+dir);
    var js_files=files.filter(function(f){
        return f.endsWith('.js');
    });
    console.log(js_files)
    //遍历读取到的js文件
    for(var f in js_files){
        console.log(`process controllers:${f}....`);
        //加载对应的js模块
        var mapping=require(__dirname+"/"+dir+"/"+js_files[f]);
        //调用模块处理函数
        addMapping(router,mapping);
    }
}

module.exports=function(dir){
    dir=dir||'controllers';
    var router=require('koa-router')();
    addControllers(router,dir);
    return router.routes();
}