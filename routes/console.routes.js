const express=require('express')

const {createConsole,getAllConsoles,upDateConsole,deleteConsole}=require('../controllers/console.controller')

const{consoleExists}=require('../middlewares/console.middlewares')
const { protectSession} = require('../middlewares/auth.middlewares');
const consoleRouter=express.Router()


consoleRouter.post('/',createConsole)
consoleRouter.get('/',getAllConsoles)
consoleRouter.patch('/:id',protectSession,consoleExists,upDateConsole)
consoleRouter.delete('/:id',protectSession,consoleExists,deleteConsole)


module.exports={consoleRouter}




