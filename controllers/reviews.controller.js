const {Reviews}=require('../models/reviews.model')
const{catchAsync}=require('../utils/catchAsync.util')
const {AppError}=require('../utils/appError.util')

const createReviews=catchAsync(async(req,res,next)=>{
const {userId,gameId,comment}=req.body;
const newReviews=await Reviews.create({userId,gameId,comment})
 res.status(201).json({
    status:'succes',
    newReviews,
 })

})
module.exports={createReviews}
























