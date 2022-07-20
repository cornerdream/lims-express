/**
 * @api {get} /api/code 验证码获取
 * @apiDescription 密码登录时验证码
 * @apiName login-code
 * @apiGroup 登录
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

 * @apiSampleRequest http://localhost:8888/api/code
 * @apiVersion 1.0.0
 */



const express = require('express');

const router = express.Router()

const codeCtrl = require('../controller/code')

router.get('/code', codeCtrl.getCode)

module.exports = router