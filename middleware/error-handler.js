const util = require('util')
module.exports=()=>{
    return (err,req,res,next)=>{
        res.status(500).json({
            //error:err//err没有序列化，所以空
            error:util.format(err)//标准化字符串，暴露了服务器的信息
        })
    }
}