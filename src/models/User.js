const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');

const User = sequelize.define('User',

{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },

  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


sequelize.sync()
.then(() => {
  console.log('Tabelas usuario sincronizando.');
})
.catch(err => {
  console.error('Erro ao sincronizar tabelas:', err);
});

module.exports = User;
