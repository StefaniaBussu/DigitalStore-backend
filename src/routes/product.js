const {controllerGetProduct, controllerGetProductID, controllerPostProduct, controllerPutProduct, controllerDeleteProduct}= require('../controllers/ControllerProducts');
const authorization = require('../middleware/authentication')
const express = require('express');
const routerProduct = express.Router()

routerProduct.get('/search', controllerGetProduct)
routerProduct.get('/:id', controllerGetProductID)
routerProduct.post('/', authorization,controllerPostProduct)
routerProduct.put('/:id', authorization,controllerPutProduct)
routerProduct.delete('/:id', authorization,controllerDeleteProduct)

module.exports = routerProduct