const { default: mongoose } = require("mongoose")
const mongooose = require("mongoose")
const Schema = mongoose.Schema
const role_menu_Schema = new mongoose.Schema({
    role_id:{
        type:Schema.Types.ObjectId,
        ref:'role',
    },
    menu_id:{
        type:Schema.Types.ObjectId,
        ref:'menu'
    }
},{collection:'role_menu'})
module.exports = role_menu_Schema