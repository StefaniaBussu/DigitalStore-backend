const {getUserId, postUser,putuser,deleteUser} = require('../services/ServiceUsuario')

const controllergetUserId =(req,res) =>{
    getUserId(req,res)
}

const controllerPostUser = (req,res) =>{
    postUser(req,res)
}
const controllerPutUser =(req,res) =>{
    putuser(req,res)
}
const controllerDeleteUser =(req,res) =>{
    deleteUser(req,res)
}

module.exports= {
    controllergetUserId,
    controllerPostUser,
    controllerPutUser,
    controllerDeleteUser
}