//页面登录的函数
var fn_index=async (ctx,next)=>{
    ctx.response.body=`<h1>Index</h1>
        <form action="/signin" method="post">
            <p>name: <input name="name" value="koa"></p>
            <p>pwd: <input name="pwd" type="password"/></p>
            <p><input type="submit" value="submit"></p>
        </form>`
}
//登录成功后的页面
var fn_signin=async (ctx,next)=>{
    var name=ctx.request.body.name||"",
        pwd=ctx.request.body.pwd||"";
        console.log(name,pwd);
    if(name=="koa"||pwd==979808689){
        ctx.response.body=`<h1>welcome,${name}<h1>`
    }else{
        ctx.response.body="<h1>login failed!</h1><p><a href='/'>try again!</></p>"
    }
}
//输出的模块
module.exports={
    'GET /':fn_index,
    'POST /signin':fn_signin
}