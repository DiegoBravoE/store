const express=require('express')
const {createUser,getAllUsers,login,upDateUser,deleteUser}=require('../controllers/user.controller')


const{userExists}=require('../middlewares/users.middlewares')
const { protectSession,protectUserAccount} = require('../middlewares/auth.middlewares');

const usersRouter=express.Router()

usersRouter.post('/',createUser)
usersRouter.post('/login', login);


usersRouter.use('/',protectSession)
//usersRouter.use(protectSession)
usersRouter.get('/',getAllUsers)

usersRouter.use('/:id',userExists).route('/:id').patch(protectUserAccount,upDateUser).delete(protectUserAccount,deleteUser)

//usersRouter.use('/:id',userExists)
//usersRouter.patch('/:id',protectUserAccount,upDateUser)
//usersRouter.delete('/:id',protectUserAccount,deleteUser)


module.exports={usersRouter}