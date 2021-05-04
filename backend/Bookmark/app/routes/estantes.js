var express = require('express');
var router = express.Router();

// Require controller modules.
var estante_controller = require('../controllers/estanteController');

/** ROUTER ESTANTE */

router.get('/', estante_controller.index); // Lista as estantes
router.get('/buscar/:id', estante_controller.buscarEstante); // Busca uma estante especifica
router.put('/favoritar/:id', estante_controller.favoritarLivro); // Favorita uma estante especifica
router.put('/desfavoritar/:id', estante_controller.desfavoritarLivro); // Favorita uma estante especifica

module.exports = router;

