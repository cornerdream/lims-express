const {verify} = require('../util/jwt')

const {jwtSecret} = require('../config/config.default')
const {Menu,users_role,role_menu} = require('../model')
exports.getMenu = async (req,res,next)=>{
    try{
        console.log(req.body)
        console.log(req.user)
        const user = req.user.toJSON()
        console.log(user)
        // const userId = user._id.toHexString()//ObjectId转化为String
        const userId = user._id
        console.log(userId)
        const usersrole = await users_role.find({user_id:userId})
        console.log(usersrole)
        const roleId = usersrole.map(item=>item.role_id)
        console.log(roleId)
        const rolemenu = await role_menu.find({'role_id':roleId})
        console.log(rolemenu)
        const menuId=rolemenu.map(item=>item.menu_id)
        console.log(menuId)
        const menu = await Menu.find({_id:menuId})
        console.log(menu)
        res.status(200).json({
            menu
        })
        
    }catch(err){
        next(err)
    }
}
exports.updateMenu=async (req,res,next)=>{
    try{
        res.send('put /user')
    }catch(err){
        next(err)
    }
}