const session = require('express-session')

module.exports = session({
    secret:'123',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 30*60*1000
    }
})