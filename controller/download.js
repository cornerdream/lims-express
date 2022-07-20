const {download} = require('../model')
const path = require('path')
exports.getDownload = async(req, res, next) =>{
    try{
        console.log(req.query.url)
        console.log(req.params.url)
        const url = req.query.url
        // const filePath = `${req.protocol}://${req.headers.host}/public/upload/${url}`
        const filePath = path.resolve('./public/upload')+`/${url}`
        // const filePath = path.join(__dirname, `./${url}`)
        console.log(filePath)
        const filename = path.basename(filePath)
        console.log(filename)
        await download.create({url:filePath})
        res.download(filePath,filename)
        // res.download(filePath).status(200).json({
        //     success:true
        // })
        // res.status(200).json({success:true})
    }catch(err){
        next(err)
    }
}