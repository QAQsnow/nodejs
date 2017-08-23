//导入koa
var koa=require('koa');
var bodyparser=require('koa-bodyparser');
var router=require('koa-router')();
//创建一个koa对象表是web app本身
var app=new koa();

//log request URL
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

//add url-route
router.get('/hello/:name',async (ctx,next)=>{
    var name=ctx.params.name;
    ctx.response.body=`<h1>hello,${name}!<h2>`;
});

router.get('/',async (ctx,next)=>{
    ctx.response.body=`<h1>Index</h1>
            <form action="/sigin" method="post">
                <p>name: <input name="name" value="koa"></p>
                <p>password: <input name="pwd" type="password"></p>
                <p><input type="submit" value="submit"></p>
            </form>`; 
})

router.post('/sigin',async (ctx,next)=>{
    var name=ctx.request.body.name||'';
    var pwd =ctx.request.body.pwd||'';
    console.log(`sign width name:${name},pwd:${pwd}`);
    if(name=="koa"&&pwd==123456){
        ctx.response.body=`<h1>welcome,${name}!<h1>`;
    }else{
        ctx.response.body="<h1>login failed!</h1><p><a href='/'>try again!</a></p>"
    }
});
//add router middleware
app.use(bodyparser());
app.use(router.routes());

//在端口监听3000
app.listen(3000);
console.log('app started at port 3000...');