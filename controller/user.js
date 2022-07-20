const {User} = require('../model')
const jwt = require('../util/jwt')
const {jwtSecret} = require('../config/config.default')
exports.register=async (req,res,next)=>{
    try{
        console.log(req.body)
        let user = new User(req.body.user)
        await user.save()
        user = user.toJSON()
        const token = await jwt.sign({
            userId:user._id
        },jwtSecret,{
            expiresIn:'7d'
        })
        delete user.password
        res.status(201).send({
            ...user,
            token
        })
    }catch(err){
        next(err)
    }
}
exports.login=async (req,res,next)=>{
    try{
        //1.获取请求体数据
        console.log(req.body)
        //2.数据验证
        const user = req.user.toJSON()
        // const user = req.body.user.toJSON()
        console.log(user)
        const token = await jwt.sign({
            userId:user._id
        },jwtSecret,{
            expiresIn:'7d'
        })
        delete user.password
        //2.1基本数据验证
        //2.2业务数据验证
        //3.验证通过，将数据保存到数据库
        //4.发送成功响应
        // res.send('post /users/login')
        res.status(200).json({
            ...user,
            token
        })
    }catch(err){
        next(err)
    }
}
exports.getCurrentUser=async (req,res,next)=>{
    try{
        console.log(req.user,req.params)
        // res.send('get /user')
        const user = req.user.toJSON()
        delete user.password
        res.status(200).json({
            ...user
        })
    }catch(err){
        next(err)
    }
}
exports.updateCurrentUser=async (req,res,next)=>{
    try{
        res.send('put /user')
    }catch(err){
        next(err)
    }
}