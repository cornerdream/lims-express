const mongoose = require('mongoose')
const Schema = mongoose.Schema
const users_role_Schema = new mongoose.Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    role_id:{
        type:Schema.Types.ObjectId,
        ref:'role'
    }
},{collection:'users_role'})
module.exports = users_role_Schema