const express = require('express')
const router = express.Router()

const empresasController = require('../controllers/empresasController')

router.get('/', empresasController.home)

router.get('/empresa/:id', empresasController.buscarEmpresa)

router.put('/editar', empresasController.editarEmpresa)

router.delete('/deletar/:id', empresasController.deletarEmpresa)

router.post('/criar/empresa', empresasController.criarEmpresa )


module.exports = router 