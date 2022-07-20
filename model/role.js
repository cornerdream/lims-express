const mongoose = require('mongoose')
const roleSchema = new mongoose.Schema({
    role_name:{
        type:String,
        default:''
    }
},{collection:'role'})
module.exports = roleSchema