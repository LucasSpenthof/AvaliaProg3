const Sequelize = require('sequelize')
const databaseConfig = require('../config/database') /* importação do arquivo da pasta 
config que possui as configuraçõe de acesso
*/
const Usuario = require ('../models/Usuario')
const Nps = require ('../models/Nps')
const Questao = require ('../models/Questao')
const Sugestoes = require ('../models/Sugestoes')
const Classificacao = require ('../models/Classificacao')

const connection = new Sequelize(databaseConfig)


Usuario.init(connection)
Nps.init(connection)
Questao.init(connection)
Sugestoes.init(connection)
Classificacao.init(connection)

module.exports = connection

// testing the connection 
testConnection = async function(){
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error); 
    }
}