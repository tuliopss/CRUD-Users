const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Banco conectado com Sequelize");
} catch (error) {
  console.log("Não foi possivel se conectar ao banco");
}

module.exports = sequelize;
