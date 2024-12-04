const app = require('./app');
const sequelize = require('./config/database');
const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const ProductImage = require('./models/ProductImage');
const ProductOption = require('./models/ProductOption');
const ProductCategory = require('./models/ProductCategory');

// Sincroniza todos os modelos com o banco
sequelize.sync({ force: false })  // Use 'force: false' ou 'alter: true' em vez de 'force: true' para evitar deletar tabelas
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });

app.listen(3000, () => {
  console.log('Servidor rodando na porta http://localhost:3000');
});
