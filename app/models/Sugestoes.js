const {Model, DataTypes} = require ('sequelize')


class Sugestoes extends Model{
    static init(connection){
        super.init({
            descricao:DataTypes.STRING,
            nps_id:DataTypes.BIGINT
        },
        {
            sequelize:connection,
            tableName:'sugestoes',
        })
    }

}