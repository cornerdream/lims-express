const {verify} = require('../util/jwt')

const {jwtSecret} = require('../config/config.default')

const {User} = require("../model")

module.exports = async (req,res,next)=>{
    console.log(req.headers)
    let token = req.headers["authorization"]
    console.log(token)
    token = token ? token.split("Bearer ")[1] : null
    if(!token){
        return res.status(401).end()
    }
    try{
        const decodedToken = await verify(token,jwtSecret)
        console.log(decodedToken)
        req.user = await User.findById(decodedToken.userId)
        // console.log(req.user)
        next()
    }catch(err){
        return res.status(401).end()
    }

}