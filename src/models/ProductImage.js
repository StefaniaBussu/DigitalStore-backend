const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ProductImage extends Model {}

ProductImage.init({
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ProductImage',
  timestamps: true
});

module.exports = ProductImage;
