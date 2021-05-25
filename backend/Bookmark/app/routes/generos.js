var express = require('express');
var router = express.Router();

// Require controller modules.
var genero_controller = require('../controllers/generoController');

/** ROUTER GENERO */

router.get('/', genero_controller.index); // Lista os generos.
router.get('/buscar/:id', genero_controller.buscarGenero); // Busca um genero especifico
router.post('/adicionar', genero_controller.adicionarGenero); // Adiciona um novo genero
router.put('/editar/:id', genero_controller.editarGenero); // Edita um genero
router.delete('/remover/:id', genero_controller.removerGenero); // Remove um genero

module.exports = router;