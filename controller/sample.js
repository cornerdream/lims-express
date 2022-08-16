const {sample} = require('../model')

exports.getSample = async(req,res,next)=>{
    try{
        console.log(req.query,req.body,req.url,req.params)
        let {limit=10,offset=0,filter={},sort={}} = req.query
        console.log(limit,offset,filter,sort)
        let filterParam = !filter?({}):JSON.parse(filter)
        console.log(filterParam)
        // const sampleTable = await sample.find({filter})
        // console.log(sampleTable)
        let sortParam = !sort?({createdAt:-1}):JSON.parse(sort)
        console.log(sortParam)
        const sampleTotal = await sample.find(filterParam).sort(sortParam)//-1倒叙，1升序
        console.log(sampleTotal)
        const sampleTable = await sample.find(filterParam)
                                        .skip(Number.parseInt(offset)*Number.parseInt(limit))
                                        .limit(Number.parseInt(limit))
                                        .sort(sortParam)//-1倒叙，1升序
        // const sampleTable = await sample.find(JSON.parse(filter))
                                    
        console.log(sampleTable)
        const sampleCount = await sample.countDocuments(filterParam)
        console.log(sampleTable)
        res.status(200).json({
            sampleTable,
            sampleTotal,
            sampleParam:{
                filter:JSON.parse(filter),
                total:sampleCount,
                limit:Number.parseInt(limit),
                offset:Number.parseInt(offset),
                sort:sortParam
            }
            
        })
        // res.status(200).json({sampleTable:req.query})
    }catch(err){
        next(err)
    }
}
exports.addSample = async(req,res,next)=>{
    try{
        console.log(req.body)
        console.log(req.body.sample)
        // console.log(req.body.toJSON())
        // const sampleObj = new sample(req.body)
        // sample.create(req.body,(err)=>{
        //     console.log(err)
        // })
        const sampleObj = sample.insertMany(req.body)
        console.log(sampleObj)
        // await sampleObj.save()
        
        res.status(201).json({
            sampleObj:req.body
        })
    }catch(err){
        next(err)
    }
}
exports.putSample = async(req,res,next)=>{
    try{
        console.log(req.sample,req.body)
        const sampleObj = req.body
        // const bodySample = req.body
        // sample.name = bodySample.name||sample.name
        // sample.tag = bodySample.tag||sample.tag
        // sample.body = bodySample.body || sample.body
        const newSampleObj = await sample.findById(sampleObj._id)
        console.log(newSampleObj)
        newSampleObj.name = sampleObj.name
        newSampleObj.tags = sampleObj.tags
        console.log(newSampleObj)
        await newSampleObj.save()
        res.status(200).json({
            newSampleObj
        })
    }catch(err){
        next(err)
    }
}
exports.deleteSample = async(req,res,next)=>{
    try{
        console.log(req.body)
        const sampleId = req.body.sampleId
        const sampleObj = await sample.findById(sampleId)
        console.log(sampleObj)
        await sampleObj.remove()
        
        res.status(200).end()
    }catch(err){
        next(err)
    }
}