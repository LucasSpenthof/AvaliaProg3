const Sequelize = require('sequelize')
const databaseConfig = require('../config/database') /* importação do arquivo da pasta 
config que possui as configuraçõe de acesso
*/
const Classificacao = require('../models/Classificacao')
const Nps = require('../models/Nps')
const Questao = require('../models/Questao')
const Sugestoes = require('../models/Sugestoes')
const Usuario = require('../models/Usuario')

const connection = new Sequelize(databaseConfig)

//inicializando as classes de modelo

Questao.init(connection)
Classificacao.init(connection)
Nps.init(connection)
Sugestoes.init(connection)
Usuario.init(connection)


module.exports = connection