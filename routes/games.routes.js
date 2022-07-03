const express=require('express')
const {createGame,getAllGames,upDateGame,deleteGame}=require('../controllers/games.controller')

const {gameExists}=require('../middlewares/games.middlewares')
const gamesRouter=express.Router()


gamesRouter.post('/',createGame)
gamesRouter.get('/',getAllGames)
gamesRouter.patch('/:id',gameExists,upDateGame)
gamesRouter.delete('/:id',gameExists,deleteGame)

module.exports={gamesRouter}