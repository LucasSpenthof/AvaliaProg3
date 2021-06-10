const LocalStrategy = require('passport-local').Strategy
module.exports = function(passport){
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'senha'
    },async (email,senha,done)=>{
        try {
            let usuario = 'query-database'
            if(!usuario) return done(null,false)
            const isValid = 'compare-password'
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