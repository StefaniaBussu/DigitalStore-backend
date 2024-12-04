const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ProductCategory extends Model {}

ProductCategory.init({
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ProductCategory',
  timestamps: false
});

module.exports = ProductCategory;
