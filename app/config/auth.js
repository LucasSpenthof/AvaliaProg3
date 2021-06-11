const LocalStrategy = require('passport-local').Strategy
const UsuarioController = require('../controllers/UsuarioController')
module.exports = function(passport){
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'senha'
    },async (email,senha,done)=>{
        try {
            let usuario = await UsuarioController.findByEmail(email)
            if(!usuario) return done(null,false)
            const isValid = usuario.senha===senha
            if(!isValid) return done(null,false)
            return done(null,{nome:usuario.nome,id:usuario.id})
        } catch (error) {
            console.log(error)
            return done(error,false)
        }
    }))
    passport.serializeUser((usuario,done)=>{
        done(null,usuario)
    })
    passport.deserializeUser((usuario,done)=>{
        try {
             done(null,usuario)
        } catch (error) {
            console.log(error)
            return done(error,null)
        }
    })
}