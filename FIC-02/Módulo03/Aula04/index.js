// Importando as biliotecas
const sqlite3 = require('sqlite3').verbose();
const { Sequelize, Model, DataTypes } = require("sequelize");
//Abrindo conexão com o Banco de dados ou criando um novo caso não exista
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "empresa.sqlite"
});
(async () => {
    await sequelize.sync({ force: true });
})();