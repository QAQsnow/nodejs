//导入koa
var koa=require('koa');
//创建一个koa对象表是web app本身
var app=new koa();

//koa middleware处理链
app.use(async (ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();//调用下一个middleware
})

app.use(async (ctx,next)=>{
    const start=new Date().getTime();//当前时间
    await next();
    const ms=new Date().getTime()-start;
    console.log(`Time:${ms}ms`);
});

//对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx,next) => {
    await next();
    ctx.response.type="text/html";
    ctx.response.body='<h1>hellow,koa2!</h1>'
})

//在端口监听3000
app.listen(3000);
console.log('app started at port 3000...');