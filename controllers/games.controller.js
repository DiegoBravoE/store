const {Game}=require('../models/games.model')
const {GamesInConsole}=require('../models/gamesInConsoles.model')
const {Reviews}=require('../models/reviews.model')
const { catchAsync } = require('../utils/catchAsync.util')
const { AppError } = require('../utils/appError.util');


const createGame =catchAsync(async(req,res,next)=>{
const {title,genre}=req.body 
const newGame=await Game.create({title,genre})
res.status(201).json({
    status:'succes',
    newGame,
})
})
const getAllGames =catchAsync(async(req,res,next)=>{
    const games=await Game.findAll({
        include:[
          {model:Reviews},
          {model:GamesInConsole}
        ]
    })
    res.status(200).json({
        status:'succes',
        games,
    })
})
const upDateGame =catchAsync(async(req,res,next)=>{
    const{game}=req;
    const {title}=req.body;
    await game.update({title})
    res.status(204).json({status:'succes'})
})
const deleteGame =catchAsync(async(req,res,next)=>{
    const {game}=req;
    await game.update({status:'deleted'})
    res.status(204).json({ status: 'success' });
})

 module.exports={createGame,getAllGames,upDateGame,deleteGame}