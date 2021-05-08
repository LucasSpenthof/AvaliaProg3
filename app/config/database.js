module.exports = {
    dialect:'postgres', // define o  SGDB a ser utilizado
    host:'localhost',
    username:'postgres', // nome de usuário padrão no postgres
    password:'192837456',
    database:'nps',
    define:{
        timestamps:true,
				/* define a nomenclatura com separação de palavaras por (_) underline*/
				underscored: true, 
    }
}