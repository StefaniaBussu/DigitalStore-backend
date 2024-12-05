const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Category',
  timestamps: true
});

module.exports = Category;