const database = require('../db');
const Autor = require('../models/autor')

// Lista todos os autores.
exports.index = function(req, res) {
    Autor.getAll((err, data) => {
         res.send(data);
    });
};

// Busca autor expecifico.
exports.buscarAutor = function(req, res) {
    Autor.findById(req.params.id, (err, data) => {
        res.send(data);
    });
};

// Adiciona um novo autor.
exports.adicionarAutor = function(req, res) {
    const autor = new Autor(req.body.autor);
    Autor.create(autor, (err, data) => {
        res.send(data);
    });
};

// Editar um autor.
exports.editarAutor = function(req, res) {
    Autor.editById(req.body.autor, req.params.id, (err, data) => {
        res.send(data);
    });
};

// Remover um autor.
exports.removerAutor = function(req, res) {
    Autor.deleteById(req.params.id, (err, data) => {
        res.send(data);
    });
};