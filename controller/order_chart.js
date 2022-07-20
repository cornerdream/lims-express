const {order_chart} = require('../model')

exports.getOrderChart = async (req,res,next)=>{
    try{
        const OrderChart = await order_chart.find()
        res.status(200).json({
            order_chart:OrderChart
        })

    }catch(err){
        next(err)
    }
}