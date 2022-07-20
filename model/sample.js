const mongoose = require('mongoose')
const baseModel = require('./base-model')
const sampleSchema = new mongoose.Schema({
    ...baseModel,
    name:{
        type:String,
        default:''
    },
    site:{
        type:String,
        default:''
    },
    tags:{
        type:Array,
        default:[]
    }
},{collection:'sample'})
module.exports = sampleSchema
