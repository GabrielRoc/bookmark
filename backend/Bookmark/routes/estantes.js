var express = require('express');
var router = express.Router();

// Require controller modules.
var estante_controller = require('../controllers/estanteController');

/** ROUTER ESTANTE */

router.get('/', estante_controller.index); // Lista as estantes
router.get('/buscar/:id', estante_controller.buscarEstante); // Busca uma estante especifica
router.get('/capitulo/:id', estante_controller.buscarCapituloAtual) // Busca o capitulo atual de uma estante


router.get('/progresso/:id', estante_controller.calcProgressoLeitura) // Calcula o progresso de leitura do livro
router.get('/estimar_leitura', estante_controller.estimaLeituraPorData) // Estima quantidades de paginas lidas por data

module.exports = router;

