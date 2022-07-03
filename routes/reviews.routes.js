const express=require('express')
const {createReviews}=require('../controllers/reviews.controller')

const reviewsRouter=express.Router()


reviewsRouter.post('/',createReviews)


module.exports={reviewsRouter}