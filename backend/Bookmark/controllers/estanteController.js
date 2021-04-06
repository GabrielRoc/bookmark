const database = require('../db');
const Estante = require('../models/estante')

// Lista todas as estantes.
exports.index = function(req, res) {
    Estante.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
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
    res.send('NOT IMPLEMENTED: editar livro');
};

// Remover um livro.
exports.removerLivro = function(req, res) {
    res.send('NOT IMPLEMENTED: remover livro');
};
