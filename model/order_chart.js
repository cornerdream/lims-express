const mongoose = require('mongoose')
const order_chartSchema = new mongoose.Schema({
    time:{
        type:Date,
        default:Date.now
    },
    type:{
        type:String,
        default:''
    },
    value:{
        type:Number,
        default:0
    }
},{collection:"order_chart"})

module.exports = order_chartSchema