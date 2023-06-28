const mongoose = require('mongoose')
const User = require('./userModel.cjs')
const cartSchema = new mongoose.Schema({
    user:{
      type:mongoose.Schema.ObjectId,
      ref:"User"
    },
   items:[
    {
      product:{
        type:mongoose.Schema.ObjectId,
        ref:'Product'
        
    },
    quantity:{
      type:Number,

    }
    }
    

    
   ],
      createdAt: {
        type: Date,
        default: Date.now
      }

   
})
// Create a static method on the cartSchema to create a new cart for a user
cartSchema.statics.createNewCart = async function(userId) {
  try {
    const user = await User.findById(userId);
    const cart = new this({
      user: user._id,
      items: [],
      createdAt: Date.now()
    });
    await cart.save({ validateBeforeSave: false });
    return cart;
  } catch (error) {
    throw new Error('Error creating cart');
  }
};
const Cart =  mongoose.model('Cart' , cartSchema)

module.exports = Cart