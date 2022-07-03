const {Console}=require('../models/consoles.model')
const{GamesInConsole}=require('../models/gamesInConsoles.model')

const { catchAsync } = require('../utils/catchAsync.util')
const {AppError}=require('../utils/appError.util')

const createConsole=catchAsync(async(req,res,next)=>{
const {name,company}=req.body
const newConsole=await Console.create({name,company})
res.status(201).json({
	ststus:'succes',
	newConsole,
})
})
const getAllConsoles=catchAsync(async(req,res,next)=>{
const console=await Console.findAll({
  include:GamesInConsole,
})
res.status(200).json({
	status:'succes',
	console,
})
})
const upDateConsole=catchAsync(async(req,res,next)=>{
const {console}=req;
const {name}=req.body;
await console.update({name})
res.status(204).json({status:'succes'})
})
const deleteConsole=catchAsync(async(req,res,next)=>{
	const {console}=req;
	
	await console.update({status:'delete'})
	res.status(204).json({status:'succes'})
})

module.exports={createConsole,getAllConsoles,upDateConsole,deleteConsole}