/**
 * @api {get} /api/order_chart 首页柱状图数据获取
 * @apiDescription 柱状图数据
 * @apiName chart
 * @apiGroup 图表
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

 * @apiSampleRequest http://localhost:8888/api/order_chart
 * @apiVersion 1.0.0
 */

const express = require('express')

const router = express.Router()

const order_chartCtrl = require('../controller/order_chart')

router.get('/order_chart',order_chartCtrl.getOrderChart)

module.exports = router