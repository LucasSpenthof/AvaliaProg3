const Questao = require('../models/Questao')
class QuestaoController{
    static async index(req,res){
       const questoes = await Questao.findAll()
       res.render('questao/index',{questoes:questoes})
    }
    static async create(req,res){
        res.render('questao/create')
    }

    static async store(req,res){
        const {descricao,ativo} = req.body
        const isAtivo = ativo ? true: false
        const questao = new Questao()
        questao.descricao = descricao,
        questao.ativo=isAtivo,
        await questao.save()
        res.redirect('/questao')

    }
    static async edit(req,res){
        const id = req.params.id
        const questao = await Questao.findByPk(id)
        res.render('questao/edit',{questao:questao})
    }
    static async update(req,res){
        const {descricao,ativo,id} = req.body
        const isAtivo = ativo ? true: false
        const questao = await Questao.findByPk(id)
        questao.descricao = descricao
        questao.ativo = isAtivo
        await questao.save()
        res.redirect('/questao')
    }
    static async destroy(req,res){
        const id = req.params.id
        const questao = await Questao.findByPk(id)
        await questao.destroy()
        res.redirect('/questao')
    }
}
module.exports = QuestaoController