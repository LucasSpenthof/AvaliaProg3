const Usuario = require('../models/Usuario')
class UsuarioController{
    static async index(req,res){
        let usuarios = await Usuario.findAll({attributes:['id','nome','email']})

        res.render('usuario/index', {usuarios})
		
	}
	static create(req,res){
        res.render('usuario/create')
	}
    static store(req,res){
        let {nome,email} = req.body
        let usuario = new Usuario()
        usuario.nome=nome
        usuario.email=email
        usuario.senha='123senha'

        await usuario.save()

        res.redirect('/usuario/')
	}
	static async edit(req,res){
        let id = req.params.id
        let usuario = await Usuario.findByPk(id)
		res.render('usuario/edit', {usuario})
	}
	static async update(req,res){
        let {nome,email} = req.body
        let usuario = await Usuario.findByPk(id)
        usuario.nome=nome
        usuario.email=email

        await usuario.save()

        res.redirect('/usuario/')
	}
	static  async destroy(req,res){
        let id = req.params.id
        let usuario = await Usuario.findByPk(id)

        await usuario.destroy()

		res.redirect('/usuario/')
	}
}