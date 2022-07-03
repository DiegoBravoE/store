const express=require('express')
const {createUser,getAllUsers,login,upDateUser,deleteUser}=require('../controllers/user.controller')


const{userExists}=require('../middlewares/users.middlewares')

const usersRouter=express.Router()

usersRouter.post('/',createUser)
usersRouter.get('/',getAllUsers)
usersRouter.post('/login', login);
usersRouter.patch('/:id',userExists,upDateUser)
usersRouter.delete('/:id',userExists,deleteUser)


module.exports={usersRouter}