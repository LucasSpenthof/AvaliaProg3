const {Model, DataTypes} = require ('sequelize')


class Questao extends Model{
    static init(connection){
        super.init({
            descricao:DataTypes.STRING,
            ativo:DataTypes.BOOLEAN
        },
        {
            sequelize:connection,
            tableName:'questao',
        })
    }

}
module.exports = Questao