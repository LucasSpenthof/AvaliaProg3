const {Model, DataTypes} = require ('sequelize')


class Nps extends Model{
    static init(connection){
        super.init({
            pontuacao:DataTypes.INTEGER,
        },
        {
            sequelize:connection,
            tableName:'nps',
        })
    }

}
module.exports = Nps