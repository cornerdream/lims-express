/**
 * @api {get} /api/download 文件下载
 * @apiDescription 表格下载功能
 * @apiName sample-download
 * @apiGroup 表格
 * @apiParam {string} url 链接地址，后台存放文件的地址
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

 * @apiSampleRequest http://localhost:8888/api/download
 * @apiVersion 1.0.0
 */

const express = require('express')

const router = express.Router()

const downloadCtrl = require('../controller/download')

router.get('/download',downloadCtrl.getDownload)

module.exports = router