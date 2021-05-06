var express = require('express');
var router = express.Router();

// Require controller modules.
var estante_controller = require('../controllers/estanteController');

/** ROUTER ESTANTE */

router.get('/', estante_controller.index); // Lista as estantes
router.get('/buscar/:id', estante_controller.buscarEstante); // Busca uma estante especifica
router.put('/favoritar/:id', estante_controller.favoritarLivro); // Favorita uma estante especifica
router.put('/desfavoritar/:id', estante_controller.desfavoritarLivro); // Favorita uma estante especifica


router.get('/progresso/:id', estante_controller.calcProgressoLeitura) // Calcula o progresso de leitura do livro
router.get('/estimar_leitura', estante_controller.estimaLeituraPorData) // Estima quantidades de paginas lidas por data

module.exports = router;

