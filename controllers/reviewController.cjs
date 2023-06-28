const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')
const Review = require('./../modals/reviewModel.cjs')
exports.getReviewsByTourId =catchAsync(async(req, res , next) => {
    const review = await Review.find({product:req.params.productId}).populate('user')
    let avgOfAllReviews = 0 ;
    review.forEach((el)=> avgOfAllReviews+=el.rating);
    avgOfAllReviews=(avgOfAllReviews/review.length).toPrecision(2)
    res.status(200).json({
        status:"success",
        avgOfAllReviews,
        length:review.length,
        review
    })
})


exports.getAllReview = catchAsync(async(req , res , next) => {
    const reviews = await Review.find();
    console.log(reviews)
    res.status(201).json({
        status:"success",

        data:reviews
    })
})
exports.createReview =catchAsync(async(req, res , next) => {

    req.body.user=req.user.id
    req.body.product=req.params.productId
    const someway = await Review.findOne({user:req.user.id,product:req.params.productId})
    let review ;
    if(someway){
        review = await Review.findOneAndUpdate({user:req.user.id,product:req.params.productId},{review:req.body.review,rating:req.body.rating},{new:"true"})
    }else{
        review = await Review.create(req.body)
        await review.save()
    }

    res.status(201).json({
        status:"success",
        data:review
    })
   
    })

exports.updateReview =catchAsync(async(req, res , next) => {
    console.log(Review)
    req.body.user=req.user.id
    req.body.product=req.params.productId
    const review = await Review.findOneAndUpdate({user:req.user.id},{review:req.body.review,rating:req.body.rating},{new:"true"})
    res.status(201).json({
        status:"success",
        data:review
    })

})


exports.deleteReview = catchAsync(async(req, res, next)=>{
    await Review.findOneAndDelete({user:req.user.id , product:req.params.productId})
    res.status(204).json({
        status:"success"
    })
})