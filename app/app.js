import express from 'express'
const router = require('./routes/web')
const app = express()

//Servir arquivos estáticos No express. 
app.use(express.static('public'))
// configuração do template engine a ser utilizado na aplicação
app.set('view engine','ejs')
// configuração do diretório da pasta views
app.set('views','./app/views')

app.use(router)

// Rota para iniciar a aplicação
app.get('/',(req,res)=>{
    res.render('index')
})
export default app