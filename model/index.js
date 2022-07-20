const mongoose = require('mongoose')
const {dbUrl} = require('../config/config.default')
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection
db.on('error',err=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('mongodb success')
})
// const cat = mongoose.model('cat',{name:String})

// const kitty = new cat({name:''})

// kitty.save().then(()=>{
//     console.log()
// })
// const menu = require('./menu')
// console.log(menu)
// const menuModel = mongoose.model('menu',menu)
// console.log(menuModel)
module.exports = {
    User:mongoose.model('users',require('./user')),
    Menu:mongoose.model('menu',require('./menu')),
    'users_role':mongoose.model('users_role',require('./users_role')),
    'role_menu':mongoose.model('role_menu',require('./role_menu')),
    'role':mongoose.model('role',require('./role')),
    'sample':mongoose.model('sample',require('./sample')),
    'order_chart':mongoose.model('order_chart',require('./order_chart')),
    'upload':mongoose.model('upload',require('./upload')),
    'download':mongoose.model('download',require('./download'))
}