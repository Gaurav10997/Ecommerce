const mongoose = require('mongoose');

const orderScema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    product:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Product'
        }
    ],
    totalPrice:{
        type:Number,
    },
    orderDate:{
        type:Date,
        default:Date.now()
    },
    orderStatus:{
        type:Boolean,
        default:true
    }
})

// productSchema.set('toObject',{virtuals:true})
// productSchema.set('toJSON',{virtuals:true})

const Order = new mongoose.model('Order' , orderScema )


module.exports=Order;