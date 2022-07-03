const express=require('express')
const {createGameInConsole}=require('../controllers/gameInConsole.controller')

const gamesInConsoleRouter=express.Router()


gamesInConsoleRouter.post('/',createGameInConsole)


module.exports={gamesInConsoleRouter}