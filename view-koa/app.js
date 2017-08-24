//导入koa
var koa=require('koa');
var bodyparser=require('koa-bodyparser');
const controller=require('./controller');
const templating=require('./templating');
//创建一个koa对象表是web app本身
var app=new koa();
const isProduction=process.env.NODE_ENV==='production';
//log request URL
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    var start=new Date().getTime(),execTime;
    await next();
    execTime=new Date().getTime()-start;
    ctx.response.set("X-Response-Time",`${execTime}ms`);
});

//static file support
if(!isProduction){
    let staticFiles=require("./static-files");
    app.use(staticFiles('/static/',__dirname+"/static"))
}

//add router middleware
app.use(bodyparser());

app.use(templating("views",{
    noCache:!isProduction,
    watch:!isProduction
}));

app.use(controller());

//在端口监听3000
app.listen(3000);
console.log('app started at port 3000...');