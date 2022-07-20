/**
 * @api {post} /api/users/login 用户登录
 * @apiDescription 用户登录功能
 * @apiName user
 * @apiGroup 用户
 * @apiParam {string} name 用户名
 * @apiParam {string} password 密码
 * @apiHeader (输入token) {string} access-token 请求头
 * @apiSuccess (成功状态) {string} status 成功状态码200
 *  * @apiSuccessExample  {json} 返回数据格式
*{
  *  "msg": "成功",
  *  "status": 200
*}
 * @apiError (失败状态){string} status 返回错误消息400
 *  * @apiErrorExample  {json} 返回数据格式
 * {
 *   "msg": "失败",
 *   "status":400
 * }

 * @apiSampleRequest http://localhost:8888/api/users/login
 * @apiVersion 1.0.0
 * 
 */

const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')
// const cors = require("cors")
//用户登录
router.post('/users/login',userValidator.login,userCtrl.login)
//用户注册
router.post('/users',userValidator.register,userCtrl.register)
//获取当前登录用户
router.get('/user',auth,userCtrl.getCurrentUser)
//更新当前登录用户
router.put('/user',auth,userCtrl.updateCurrentUser)
module.exports = router