require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_NAME_DEVELOPMENT,
    "password": process.env.DB_HOST_DEVELOPMENT,
    "database": process.env.DB_USERNAME_DEVELOPMENT,
    "host": process.env.DB_PASSWORD_DEVELOPMENT,
    "dialect": 'mysql'
  },
  "test": {
    "username": process.env.DB_NAME_TEST,
    "password": process.env.DB_HOST_TEST,
    "database": process.env.DB_USERNAME_TEST,
    "host": process.env.DB_PASSWORD_TEST,
    "dialect": 'mysql'
  },
  "production": {
    "username": process.env.DB_NAME_PRODUCTION,
    "password": process.env.DB_HOST_PRODUCTION,
    "database": process.env.DB_USERNAME_PRODUCTION,
    "host": process.env.DB_PASSWORD_PRODUCTION,
    "dialect": 'mysql'
  }
}
