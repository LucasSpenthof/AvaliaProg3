const {Model, DataTypes} = require ('sequelize')


class Sugestoes extends Model{
    static init(connection){
        super.init({
            descricao:DataTypes.STRING,
        },
        {
            sequelize:connection,
            tableName:'sugestoes',
        })
    }

}
module.exports = Sugestoes