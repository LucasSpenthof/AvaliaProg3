/*module.exports = {
    dialect:'postgres', // define o  SGDB a ser utilizado
    host:'localhost',
    username:'postgres', // nome de usuário padrão no postgres
    password:'root',
    database:'nps',
    define:{
        timestamps:true,
				
				underscored: true, 
    }
}*/

module.exports = {
    dialect:process.env.DB_DIALECT, 
    host:process.env.DB_HOST,
    username:process.env.DB_USER, 
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    define:{
        timestamps:true,
				underscored: true, 
    }
}

