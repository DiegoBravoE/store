const express=require('express')

const {createConsole,getAllConsoles,upDateConsole,deleteConsole}=require('../controllers/console.controller')

const{consoleExists}=require('../middlewares/console.middlewares')

const consoleRouter=express.Router()


consoleRouter.post('/',createConsole)
consoleRouter.get('/',getAllConsoles)
consoleRouter.patch('/:id',consoleExists,upDateConsole)
consoleRouter.delete('/:id',consoleExists,deleteConsole)


module.exports={consoleRouter}




