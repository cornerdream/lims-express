const {body,param} = require('express-validator')

const validate = require('../middleware/validate')

const mongoose = require('mongoose')

exports.updateSample = [
    validate([
        validate.isValidObjectId(['param','sampleId'])
    ]),
    async(req,res,next)=>{
        const sampleId = req.params.sampleId
        const sample = await sample.findById(sampleId)
        req.sample = sample
        if(!sample){
            return res.status(404).end()
        }
        next()
    }, 
    
]