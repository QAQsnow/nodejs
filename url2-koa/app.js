//导入koa
var koa=require('koa');
var bodyparser=require('koa-bodyparser');
const controller=require('./controller');
//创建一个koa对象表是web app本身
var app=new koa();

//log request URL
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

//add router middleware
app.use(bodyparser());
app.use(controller());

//在端口监听3000
app.listen(3000);
console.log('app started at port 3000...');