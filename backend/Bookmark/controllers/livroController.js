const database = require('../db');
const Livro = require('../models/livro')

exports.index = function(req, res) {
    Livro.get(req.headers, (err, data) => {
         res.send(data);
    });
};

// Busca livro expecifico.
exports.buscarLivro = function(req, res) {
    Livro.findById(req.params.id, (err, data) => {
        res.send(data);
    });
};

// Adiciona um novo livro.
exports.adicionarLivro = function(req, res) {
    const livro = new Livro(req.body.livro);
    Livro.create(livro, (err, data) => {
        res.send(data);
    });
};

// Editar um livro.
exports.editarLivro = function(req, res) {
    Livro.editById(req.body.livro, req.params.id, (err, data) => {
        res.send(data);
    });
};

// Remover um livro.
exports.removerLivro = function(req, res) {
    Livro.deleteById(req.params.id, (err, data) => {
        res.send(data);
    });
};