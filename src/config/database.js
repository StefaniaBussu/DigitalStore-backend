require('dotenv').config()

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS, 
  {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: ProgressEvent.env.DB_PORT
});

sequelize.authenticate()
.then(() => {
  console.log('Conexão estabelecida com sucesso');
})
.catch(err => {
  console.error('Não foi ossível conectar ao banco de dados:', err);
});

module.exports = sequelize

