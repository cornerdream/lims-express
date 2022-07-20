module.exports={
    dbUrl:'mongodb://127.0.0.1:27017/lims',
    jwtSecret:'bd9655ba-db36-11ec-9d64-0242ac120002',
    cros:{
        // allow_origin:'http://localhost:3000,http://localhost:8888',//任意域名都可以访问,或者基于我请求头里面的域
        allow_origin:'*',
        allow_methods:'put,post,get,delete,options,head,PUT,DELETE',//允许支持的请求方式
        headers:'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,account,Authorization',//设置请求头格式和类型
        credentials:false,//允许后端发送cookie
        content_type:'application/json;charset=utf-8'//默认与允许的文本格式json和编码格式
    },
    session:{
        secret:'d3',
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge:1000 * 60 * 60 *24 *30
        }
    }
}