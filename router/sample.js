/**
 * @api {get} /api/sample 样本列表数据获取
 * @apiDescription 样本列表数据
 * @apiName sample
 * @apiGroup 表格
 * @apiParam {string} name 样本名
 * @apiParam {string} tags 分类名
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

 * @apiSampleRequest http://localhost:8888/api/sample
 * @apiVersion 1.0.0
 */

const express = require('express')

const router = express.Router()

const sampleCtrl = require('../controller/sample')

const auth = require('../middleware/auth')

router.get('/sample',sampleCtrl.getSample)
router.post('/sample',sampleCtrl.addSample)
router.put('/sample',sampleCtrl.putSample)
router.delete('/sample',sampleCtrl.deleteSample)
module.exports = router