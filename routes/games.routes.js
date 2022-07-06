const express=require('express')
const {createGame,getAllGames,upDateGame,deleteGame,reviewGame}=require('../controllers/games.controller')

const {gameExists}=require('../middlewares/games.middlewares')
const { protectSession} = require('../middlewares/auth.middlewares');

const gamesRouter=express.Router()




gamesRouter.post('/',protectSession,createGame)
gamesRouter.get('/',getAllGames)
gamesRouter.patch('/:id',protectSession,gameExists,upDateGame)
gamesRouter.delete('/:id',protectSession,gameExists,deleteGame)
gamesRouter.post('/reviews/:gameId',protectSession,gameExists,reviewGame)

module.exports={gamesRouter}