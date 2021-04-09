var express = require('express');
var router = express.Router();

// Require controller modules.
var estante_controller = require('../controllers/estanteController');

/** ROUTER ESTANTE */

router.get('/', estante_controller.index); // Lista as estantes
router.get('/buscar/:id', estante_controller.buscarEstante); // Busca uma estante especifica
router.get('/capitulo/:id', estante_controller.buscarCapituloAtual) // Busca o capitulo atual de uma estante

module.exports = router;

