const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
const config = require('./config/config.default')
const bodyParser = require('body-parser')
const app = new express()
app.use(express.json())//解析请求体
app.use(express.urlencoded({extended:false}))//配置解析表单请求体x-www-form-urlecncoded，post->body->x-www-form-
//app.use(morgan(":method :url :status :res[content-length]-:response-time ms"))//日志输出
app.use(morgan("dev"))//开发模式日志
app.use(express.static(__dirname+'/public'))
// app.use(cors())//跨域
// app.all('*', function(req, res, next) {
//     // 设置允许跨域的域名,*代表允许任意域名跨域
//     res.header('Access-Control-Allow-Origin','*');
//     // 允许的header类型
//     res.header('Access-Control-Allow-Headers','content-type');
//     // 跨域允许的请求方式
//     res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
//     if(req.method.toLowerCase() == 'options')
//         res.send(200); // 让options 尝试请求快速结束
//     else
//         next();


// });
app.use((req, res, next) => {
    const {allow_origin,allow_methods,headers,credentials,content_type} = config.cros;
    //判断路径
    if(req.path !== '/' && !req.path.includes('.')){
      res.set({
        'Access-Control-Allow-Credentials': credentials, 
        'Access-Control-Allow-Origin': allow_origin, 
        'Access-Control-Allow-Headers': headers, 
        'Access-Control-Allow-Methods': allow_methods,
        'Content-Type': content_type
      })
    }
    // req.method === 'OPTIONS' ? res.status(204).end() : next()
    req.method === 'OPTIONS' ? res.send() : next()
  })
const port = process.env.PORT||8888

app.use("/api",router)
app.use(errorHandler())


app.listen(port,()=>{
    console.log('server')
})