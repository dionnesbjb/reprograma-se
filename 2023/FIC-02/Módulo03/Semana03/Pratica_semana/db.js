//instanciando o sqlite
const sqlite3 = require('sqlite3').verbose();
//instanciando o sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './empresa.sqlite'
})

module.exports = sequelize;