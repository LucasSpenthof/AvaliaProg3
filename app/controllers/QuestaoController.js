const Questao = require('../models/Questao')
class QuestaoController{
    static index(req,res){
        let questoes = await Questao.findAll({attributes:['descricao','ativo']})

        res.render('questao/index', {questoes})
		
	}
	static create(req,res){
		res.render('questao/create')
	}
  static store(req,res){
        let descricao = req.body.descricao
        let ativo = true
        let questao = new Questao()
		questao.descricao = descricao
        questao.ativo = ativo
        await questao.save()
        res.redirect('/questao')
	}
	static edit(req,res){
		let id = req.params.id
        let questao = await Questao.findByPk(id)
		res.render('questao/edit', {questao})
	}
	static update(req,res){
		let descricao = req.body.descricao
        let ativo = true
        let questao = await Questao.findByPk(id)
        questao.descricao = descricao
        questao.ativo = ativo

        await questao.save()

        res.redirect('/questao/')
	}
	static destroy(req,res){
		let id = req.params.id
        let questao = await Questao.findByPk(id)

        await questao.destroy()

		res.redirect('/questao/')
	}
}