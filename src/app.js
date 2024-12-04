const express = require('express');
const sequelize = require('./config/database');
const app = express();

app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = app;
