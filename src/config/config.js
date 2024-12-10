module.exports = {
    development: {
      dialect: 'mysql',
      host: '127.0.0.1',
      database: 'development_db',
      username: 'root',
      password: 'sua_senha',
    },
    test: {
      dialect: 'sqlite',
      storage: ':memory:',
    },
    production: {
      dialect: 'mysql',
      host: '127.0.0.1',
      database: 'production_db',
      username: 'root',
      password: 'sua_senha',
    },
  };
  