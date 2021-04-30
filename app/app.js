import express from 'express'
const app = express()

//Servir arquivos estáticos No express. 
app.use(express.static('public'))
// configuração do template engine a ser utilizado na aplicação
app.set('view engine','ejs')
// configuração do diretório da pasta views
app.set('views','./app/views')

// Rota para iniciar a aplicação
app.get('/',(req,res)=>{
    res.render('index')
})
export default app