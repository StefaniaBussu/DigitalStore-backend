const express = require('express');
const app = express();
const sequelize = require('./config/database');


app.use(express.json());

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));

module.exports = app;
