const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}

Product.init({
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
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
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price_with_discount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Product',
  timestamps: true
});

module.exports = Product;
