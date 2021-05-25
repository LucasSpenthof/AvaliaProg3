const {Model, DataTypes} = require ('sequelize')


class Classificacao extends Model{
    static init(connection){
        super.init({
            like:DataTypes.BOOLEAN,
            quesao_id:DataTypes.BIGINT
        },
        {
            sequelize:connection,
            tableName:'classificacao',
        })
    }

}