const mongoose = require('mongoose')
const baseModel = require('./base-model')
const uploadSchema = new mongoose.Schema({
    ...baseModel,
    title:{
        type:String,
        default:''
    },
    files:{
        type:Array,
        default:[]
    },
    file:{
        type:String,
        default:''
    }
},{collection:'upload'})

module.exports = uploadSchema