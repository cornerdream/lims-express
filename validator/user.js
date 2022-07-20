const {body} = require('express-validator')

const validate = require('../middleware/validate')
const { User } = require('../model')
const md5 = require('../util/md5')
exports.register = validate([
    body('user.name').notEmpty().withMessage('用户名不为空')
                         .custom(async name=>{
                             const user = await User.findOne({name})
                             if(user){
                                 return Promise.reject('用户名已存在')
                             }
                         })
])

exports.login = [
    validate([
        body("user.name").notEmpty().withMessage("用户名不为空"),
        body("user.password").notEmpty().withMessage("密码不为空")
    ]),
    validate([
        body('user.name').custom(async (name,{req})=>{
            const user = await User.findOne({name}).select(['name','password'])
            if(!user){
                // return Promise.reject('用户不存在')
                return Promise.reject({message:'用户名不存在'})
            }
            req.user = user
        })
    ]),
    validate([
        body("user.password").custom(async (password,{req})=>{
            console.log(password)
            console.log(req.body.user.password)
            console.log(req.user.password)
            console.log(md5(password))
            if(md5(password)!==req.user.password){
                return Promise.reject('密码错误')
            }
            // if(password!==req.body.user.password){
            //     return Promise.reject('密码错误')
            // }
        })
    ])
]