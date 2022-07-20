const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')
const userSchema = new mongoose.Schema({
    ...baseModel,
    name:{
        type:String,
        required:true
    },
    // email:{
    //     type:String,
    //     required:true
    // },
    password:{
        type:String,
        required:true,
        set:value=>md5(value)
    },
    // bio:{
    //     type:String,
    //     default:null
    // },
    img:{
        type:String,
        default:null
    },
    
},{collection:'users'})

module.exports = userSchema