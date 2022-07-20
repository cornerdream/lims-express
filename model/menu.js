const mongoose = require('mongoose')
const menuSchema = new mongoose.Schema({
    key:{
        type:String,
        default:''
    },
    title:{
        type:String,
        default:''
    },
    children:{
        type:Array,
        default:[]
    },
    level:{
        type:String,
        default:'0'
    },
    icon:{
        type:String,
        default:''
    }
},{collection:'menu'})
module.exports = menuSchema