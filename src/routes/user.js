const {controllergetUserId,controllerPostUser,controllerPutUser,controllergetDeleteUser}= require('../controllers/ControllerUser');
const express=require('express');
const routerUsuario = express.Router()
const authorization = require('../middleware/authentication');


routerUsuario.get('/:id',(req,res)=>{
    controllergetUserId(req,res)
})
routerUsuario.post('/',(req,res)=>{
    controllerPostUser(req,res)
})
routerUsuario.put('/:id', authorization,(req,res)=>{
    controllerPutUser(req,res)
})
routerUsuario.delete('/.id', authorization,(req,res)=>{
    controllergetDeleteUser(req,res)
})

module.exports= routerUsuario