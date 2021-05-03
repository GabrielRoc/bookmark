const database = require('../db');
const Genero = require('../models/genero')

// Lista todos os generos.
exports.index = function(req, res) {
    Genero.getAll((err, data) => {
         res.send(data);
    });
};

// Busca genero expecifico.
exports.buscarGenero = function(req, res) {
    Genero.findById(req.params.id, (err, data) => {
        res.send(data);
    });
};

// Adiciona um novo genero.
exports.adicionarGenero = function(req, res) {
    const genero = new Genero(req.body.genero);
    Genero.create(genero, (err, data) => {
        res.send(data);
    });
};

// Editar um genero.
exports.editarGenero = function(req, res) {
    Genero.editById(req.body.genero, req.params.id, (err, data) => {
        res.send(data);
    });
};

// Remover um genero.
exports.removerGenero = function(req, res) {
    Genero.deleteById(req.params.id, (err, data) => {
        res.send(data);
    });
};