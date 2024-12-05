require('dontenv').config()
const express = require('express');
const sequelize = require('./config/database');
const app = express();
const usuarioRoutes = require('./routes/user')
const categoriaRoutes = require('./routes/category')
const loginRoutes = require('./routes/login')
const produtosRoutes = require('./routes/product.js')
const cors = require('cors') 

app.use(cors())
app.use(express.json());

app.get('/',(req,res) => {
  res.json({
    message:'Bem-vindo',
    nome: "API DIGITAL STORE",
    autor: "Stefania e Estefania",
    versao:"1.0.0"
  })
  res.end();
})

app.use('/v1/usuarios', usuarioRoutes);
app.use(categoriaRoutes);
app.use('/v1/user', loginRoutes)
app.use('/v1/produtos', produtosRoutes)


sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = app;
