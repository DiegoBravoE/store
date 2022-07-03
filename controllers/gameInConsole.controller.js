const {GamesInConsole}=require('../models/gamesInConsoles.model')
const{catchAsync}=require('../utils/catchAsync.util')
const {AppError}=require('../utils/appError.util')

const createGameInConsole=catchAsync(async(req,res,next)=>{
const {gameId,consoleId}=req.body;
const newGameInConsole=await GamesInConsole.create({gameId,consoleId})
 res.status(201).json({
    status:'succes',
    newGameInConsole,
 })

})
module.exports={createGameInConsole}







