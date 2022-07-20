const mongoose = require('mongoose')
const baseModel = require('./base-model')
const downloadSchema = new mongoose.Schema({
    ...baseModel,
    url:{
        type:String,
        default:''
    }
},{collection:'download'})

module.exports = downloadSchema