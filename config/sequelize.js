const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Database schema synchronized (with data preservation)');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

module.exports = sequelize;