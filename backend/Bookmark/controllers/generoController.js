const database = require('../db');
const Genero = require('../models/genero')

// Lista todos os generos.
exports.index = function(req, res) {
    Genero.getAll((err, data) => {
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