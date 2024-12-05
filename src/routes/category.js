const express = require('express');
const {getCategorias, getCategoriaId, postCategoria, putCategoria, deleteCategoria} = require('../controllers/ControllerCategory');
const autorization = require('../middleware/authentication')
const categoriaRoutes = express.Router()

categoriaRoutes.get('/v1/categorias/search', getCategorias)
categoriaRoutes.get('/v1/categorias/:id', getCategoriaId)
categoriaRoutes.post('/v1/categorias', autorization, postCategoria)
categoriaRoutes.put('/v1/categorias/:id', autorization, putCategoria)
categoriaRoutes.delete('/v1/categorias/:id', autorization, deleteCategoria)

module.exports = categoriaRoutes