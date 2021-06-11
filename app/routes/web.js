const { Router } = require('express')
const QuestaoController = require('../controllers/QuestaoController')
const UsuarioController = require('../controllers/UsuarioController')
const authenticate = require('../middlewares/authenticate')
const router = Router()

router.get('/questao/',authenticate,QuestaoController.index)
router.get('/questao/create',authenticate,QuestaoController.create)
router.post('/questao/store',QuestaoController.store)
router.get('/questao/edit/:id',QuestaoController.edit)
router.post('/questao/update',QuestaoController.update)
router.get('/questao/destroy/:id',QuestaoController.destroy)

router.get('/usuario/',UsuarioController.index)
router.get('/usuario/create',UsuarioController.create)
router.post('/usuario/store',UsuarioController.store)
router.get('/usuario/edit/:id',UsuarioController.edit)
router.post('/usuario/update',UsuarioController.update)
router.get('/usuario/destroy/:id',UsuarioController.destroy)
router.get('/usuario/login',UsuarioController.login)
router.post('/usuario/auth',UsuarioController.authenticate)

module.exports = router