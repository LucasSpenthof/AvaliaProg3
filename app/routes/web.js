const { Router } = require('express')
const router = Router()

const router = Router()

router.get('/questao/',QuestaoController.index)
router.get('/questao/create',QuestaoController.create)
router.post('/questao/store',QuestaoController.store)
router.get('/questao/edit/:id',QuestaoController.edit)
router.post('/questao/update',QuestaoController.update)
router.get('/questao/destroy/:id',QuestaoController.destroy)