var express = require('express');
var router = express.Router();

// Require controller modules.
var autor_controller = require('../controllers/autorController');

/** ROUTER AUTOR */

router.get('/', autor_controller.index); // Lista os autores.
router.get('/buscar/:id', autor_controller.buscarAutor); // Busca um autor especifico
router.post('/adicionar', autor_controller.adicionarAutor); // Adiciona um novo autor
router.put('/editar/:id', autor_controller.editarAutor); // Edita um autor
router.delete('/remover/:id', autor_controller.removerAutor); // Remove um autor

module.exports = router;