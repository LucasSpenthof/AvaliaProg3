const Questao = require('../models/Questao')
class QuestaoController{
    static index(req,res){
        res.render('questao/index')
		
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
		res.render('questao/edit')
	}
	static update(req,res){
		
	}
	static destroy(req,res){
		
	}
}