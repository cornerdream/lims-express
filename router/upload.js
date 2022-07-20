/**
 * @api {post} /api/upload 文件上传
 * @apiDescription 表格上传功能
 * @apiName upload
 * @apiGroup 表格
 * @apiParam {array} files 文件名
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

 * @apiSampleRequest http://localhost:8888/api/upload
 * @apiVersion 1.0.0
 */


const express = require('express')
const multer = require('multer')
const iconv = require('iconv-lite')

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file)
        cb(null,'public/upload')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        // cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
        // cb(null,file.originalname)
        cb(null,Date.now()+'-'+iconv.decode(file.originalname,'utf-8'))
        // cb(null,iconv.decode(file.originalname,'utf-8'))
    }
});

var uploadMulter = multer({storage:storage})
console.log(uploadMulter)

const router = express.Router()

const uploadCtrl = require('../controller/upload')
console.log(uploadCtrl)


router.post('/upload',uploadMulter.array('files'),uploadCtrl.fn)
// router.post('/upload',uploadCtrl.avatar,uploadCtrl.fn)
// router.post('/upload',uploadCtrl.uploadMulter.array('title',8),uploadCtrl.fn)
module.exports = router