/**
 * @api {get} /api/menu 菜单获取
 * @apiDescription 菜单选项功能
 * @apiName menu
 * @apiGroup 菜单
 * @apiParam {string} user 用户信息
 *  @apiHeader (输入token) {string} access-token 请求头
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

 * @apiSampleRequest http://localhost:8888/api/menu
 * @apiVersion 1.0.0
 */


const express = require('express')
const router = express.Router()
const menuCtrl = require('../controller/menu')

const auth = require('../middleware/auth')

//获取当前登录用户
router.get('/menu',auth,menuCtrl.getMenu)
//更新当前登录用户
router.put('/menu',auth,menuCtrl.updateMenu)
module.exports = router