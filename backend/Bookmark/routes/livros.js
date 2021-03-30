var express = require('express');
var router = express.Router();

// Require controller modules.
var livro_controller = require('../controllers/livroController');

/** ROUTER LIVRO */

router.get('/', livro_controller.index); // Lista os livros.
router.get('/buscar/:id', livro_controller.buscarLivro); // Busca um livro especifico
router.post('/adicionar', livro_controller.adicionarLivro); // Adiciona um novo livro
router.put('/editar/:id', livro_controller.editarLivro); // Edita um livro
router.delete('/remover/:id', livro_controller.removerLivro); // DELET Remove um livro

module.exports = router;
