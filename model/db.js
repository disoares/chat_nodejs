// Infos DB
const NAME_DB = "chic_db_teste";
const USER_DB = "chic_db_teste";
const PASS_DB = "B*-tFs*7MDc2eS";
const HOST_DB = "chic_db_teste.mysql.dbaas.com.br";
const DIALECT_DB = "mysql";

/*

PARA AMBIENTE PRODUÇÃO

const NAME_DB = "chic_db";
const USER_DB = "chic_db";
const PASS_DB = "Szt9n@K#umta*j";
const HOST_DB = "chic_db.mysql.dbaas.com.br";
const DIALECT_DB = "mysql";

*/

// Conexão com DB
const Sequelize = require('sequelize');
const sequelize = new Sequelize(NAME_DB, USER_DB, PASS_DB, {
    host: HOST_DB,
    dialect: DIALECT_DB
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}