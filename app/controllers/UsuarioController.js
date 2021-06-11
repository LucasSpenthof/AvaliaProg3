const Usuario = require('../models/Usuario')
const passport = require('passport')
class UsuarioController{
    static async index(req,res){
       let usuarios = await Usuario.findAll({attributes:['id','nome','email']}) 
       res.render('usuario/index',{usuarios})
    }
    static  create(req,res){
        res.render('usuario/create')
    }

    static async store(req,res){
        let {nome,email} = req.body
        let usuario = new Usuario()
        usuario.nome=nome
        usuario.email=email
        usuario.senha='123'
        await usuario.save()
        res.redirect('/usuario/')

    }
    static async edit(req,res){
        let id = req.params.id
        let usuario = await Usuario.findByPk(id)
        res.render('usuario/edit',{usuario})
    }
    static async update(req,res){
       let {id,nome,email} = req.body
       let usuario = await Usuario.findByPk(id)
       usuario.nome = nome
       usuario.email = email
       await usuario.save()
       res.redirect('/usuario/')
    }
    static async destroy(req,res){
        let id = req.params.id
        let usuario = await Usuario.findByPk(id)
        await usuario.destroy()
        res.redirect('/usuario/')
    }
    static async findByEmail(email){
        let usuario = await Usuario.findOne({
            where:{
                email:email
            }})
        return usuario
    }
    static login(req,res){
        res.render('usuario/login')
    }
    static authenticate(req,res,next){
        passport.authenticate('local',{
            successRedirect:'/',
            failureRedirect:'/usuario/login'
        })(req,res,next)
    }
}
module.exports = UsuarioController