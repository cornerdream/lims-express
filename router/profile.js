const express = require('express')
const router = express.Router()
//获取用户资料
router.post('/:username',async(req,res,next)=>{
    try{
        res.send('post /profile/:username')
    }catch(err){
        next(err)
    }
})
//关注用户
router.post('/:username/follow',async (req,res,next)=>{
    try{
        res.send('post /profiles/:username/follow')
    }catch(err){
        next(err)
    }
})
//取消关注
router.delete('/:username/follow',async (req,res,next)=>{
    try{
        res.send('post /profiles/:username/follow')
    }catch(err){
        next(err)
    }
})
module.exports = router