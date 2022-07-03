const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

const { User } = require('../models/users.model');
const {Reviews}=require('../models/reviews.model')
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

dotenv.config({ path: './config.env' });

const getAllUsers= catchAsync( async(req,res,next)=>{
const users=await User.findAll({
    //ver que dato incluyen en el ejrcicio
    include:Reviews,
})

res.status(200).json({
    status:'succes',
    users,
})

})

const createUser= catchAsync( async(req,res,next)=>{
const {name,age,email,password}=req.body;

const salt=await bcrypt.genSalt(12)
const hashPassword=await bcrypt.hash(password,salt)

const newUser=await User.create({
    name,age,email,password:hashPassword,
})
newUser.password=undefined;
res.status(201).json({
    status:'succes',
    newUser,
})

})
const login= catchAsync( async(req,res,next)=>{
    const {email,password}=req.body;
    //validate credenciales
    const user=await User.findOne({
        where:{
            email,
            status:'active',
        }
    })
    if (!user) {
        return next(new AppError('credenciales invalidas',400));
    }
     const isPasswordValid=await bcrypt.compare(password,user.password)

     if (!isPasswordValid) {
         return next(new AppError('credenciales invalidas',400));   
     }
     //generar JWT
     const token=await jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'5d',})

     //respuesta
     res.status(200).json({
        status:'succes',
        token,
     })
})

const upDateUser=catchAsync( async(req,res,next)=>{
 const {user}=req;
const {name,email}=req.body
await user.update({name,email})

res.status(204).json({status:'succes'})
})

const deleteUser=catchAsync( async(req,res,next)=>{
    const { user } = req;

	// await user.destroy();
	await user.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });

})
module.exports={createUser,getAllUsers,login,upDateUser,deleteUser}