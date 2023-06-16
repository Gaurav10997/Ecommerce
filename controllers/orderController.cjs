const catchAsync = require('./../utils/catchAsync.cjs')
const AppError = require('./../utils/appError.cjs')
const Order = require('./../modals/orderModel.cjs')

exports.haha= () => {
    console.log("haha");
}

exports.createOrder = async(req , res , next ) =>{
    if(!req.body.user)req.body.user=req.user.id
    console.log(req.body);
    const order = await Order.create(req.body);
    res.status(201).json({
        status:'success',
        data:order,
    })
}

exports.getMyOrder = async(req,res,next) =>{
    // console.log(req.user.id)
    const order = await Order.find({user:req.user.id}).populate('product')
    res.status(200).json({
        status:"success",
        order
    })


}
