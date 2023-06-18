require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')
const Product = require("./../modals/product.cjs")
const Cart = require('./../modals/cartModel.cjs')
exports.getCheckoutSession =  catchAsync(async(req,res,next) =>{
    // get the currently purchased things
    const userId = req.user._id;
    const cart = await Cart.findOne({user:userId})
    .populate('items.product')
    const products = cart.items.map((item)=>{
        return(
            {
                price_data: {
                  currency: 'usd',
                  unit_amount: item.product.price,
                  product_data: {
                    name: item.product.name,
                    description: item.product.description,
                    images: item.product.images,
                  },
                },
                quantity: item.quantity,
              }
        )
    })

    // Craete the checkout session 
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        customer_email:req.user.email,
        client_reference_id : req.params.tourId ,
        line_items: products,
          mode: 'payment',
          success_url: process.env.HOMEPAGEURL,
          cancel_url: process.env.HOMEPAGEURL,

    })

    // create session and send to the client

    res.status(200).json({
      status:"success",
      session,
    });
})