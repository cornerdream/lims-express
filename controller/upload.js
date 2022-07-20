const multer = require('multer')
const path = require('path')
const iconv = require('iconv-lite')
const {upload} = require('../model')
const ObjectId = require('mongoose').Types.ObjectId
// const iconv = require('iconv-lite')
const { nextTick } = require('process')
const fs = require('fs')
const { encode } = require('punycode')
const uploadPath = path.join(__dirname,'.././public','upload')
const storage = multer.diskStorage({
    // destination:path.join(__dirname,'.././public','upload'),
    // destination:uploadPath,
    destination:(req,file,cb)=>{
        console.log(file)
        cb(null,'public/upload')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        // cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
        // cb(null,file.originalname)
        cb(null,file.fieldname+'-'+Date.now()+'-'+iconv.decode(file.originalname,'utf-8'))
    }
});
const uploadMulter = multer({dest:storage})
// exports.uploadMulter = uploadMulter
const avatar = uploadMulter.array('files')//与前端传递过来和数据库的字段一致
// const avatar = uploadMulter.single('title')
// const avatar = (req,res,next)=>{
//     try{
//         const storage = multer.diskStorage({
//             // destination:path.join(__dirname,'.././public','upload'),
//             // destination:uploadPath,
//             destination:(req,file,cb)=>{
//                 console.log(file)
//                 cb(null,'/public/upload')
//             },
//             filename:(req,file,cb)=>{
//                 console.log(file)
//                 // cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
//                 cb(null,file.originalname)
//             }
//         });
//         const uploadMulter = multer({dest:storage})
//         uploadMulter.array('title',8)
//         res.send()
//     }catch(err){
//         next(err)
//     }
    
// }

const fn = async (req,res,next)=>{
    console.log(req.file,req.body,req.files)
    // const {body:reqBody} = req;
    // const {files} = reqBody
    // console.log(files)
    var files = req.files
    // var source = fs.createReadStream(path.join(__dirname,files))
    // var dest = fs.createWriteStream(`${req.protocol}://${req.headers.host}/public/upload/${files}`)
    // source.pipe(dest)
    try{
        console.log(files)
        if(files.length == 0){
            res.json({
                code:500,
                message:'文件上传不能为空'
            })
        }else{
            var task = [];
            // if(Array.isArray(files)){
                
            //     files.forEach(el => {
            //         // console.log(el)
            //         let avatarPath = `${req.protocol}://${req.headers.host}/public/upload/${el.filename}`
            //         // let avatarPath = `${uploadPath}/${el.name}`
            //         // console.log(avatarPath)
            //         // task = upload.create({title:avatarPath})
            //         // console.log(task)
            //         task.push(avatarPath)
            //     });
                
            // }else{
            //     let avatarPath = `${req.protocol}://${req.headers.host}/public/upload/${files.filename}`
            //     task.push(avatarPath)
            // }
            // console.log(task)
            
            files.forEach(el => {
                // let oldPath = el.path;
                // console.log(oldPath)
                // let newPath = path.join(__dirname,'/public/upload',el.filename)
                let filename = el.filename.split('-')[1]
                let avatarPath = `${req.protocol}://${req.headers.host}/public/upload/${el.filename}`
                // fs.renameSync(oldPath,newPath)
                // task.push(avatarPath)
                let fileObj = {file:avatarPath,title:filename,_id:ObjectId()}
                task.push(fileObj)
                upload.create(fileObj)
                // task = upload.find()
            })
            // let data = await upload.find()
            // console.log(data)
            // await upload.create({files:task})
            // res.writeHead(200,{'content-type': 'text/html;charset=utf-8'})
            res.status(200).json({
                code:200,
                data:task,
                // data:files,
                message:'success'
            })
        }
        
        // res.send(task)
        
    }catch(err){
        next(err)
    }
}

exports.avatar = avatar
exports.fn = fn
