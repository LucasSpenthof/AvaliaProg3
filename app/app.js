require('./database/connection')
const express = require('express')
const router = require('./routes/web')
const session = require('./config/session')
const passport = require('passport')
require('./config/auth')(passport)
const app = express()

//Servir arquivos estáticos No express. 
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) 
app.use(session)
app.use(passport.initialize())
app.use(passport.session())
app.use(router)
// configuração do template engine a ser utilizado na aplicação
app.set('view engine','ejs')
// configuração do diretório da pasta views
app.set('views','./app/views')

// Rota para iniciar a aplicação
app.get('/',(req,res)=>{
    res.render('index')
})
module.exports = app