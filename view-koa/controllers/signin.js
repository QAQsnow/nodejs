
//输出的模块
module.exports={
    'POST /signin':async (ctx,next)=>{
        var name=ctx.request.body.name||"",
            pwd=ctx.request.body.pwd||"";
            console.log(name,pwd);
        if(name=="koa"&&pwd==979808689){
            ctx.render("signin-ok.html",{
                title:"sign in ok",
                name:'Mr snow'
            })
        }else{
            console.log('sign in failed!')
            ctx.render('signin-failed.html',{
                title:'Sign In Failed'
            })
        }
    }
}