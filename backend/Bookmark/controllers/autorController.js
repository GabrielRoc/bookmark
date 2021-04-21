const database = require('../db');
const Autor = require('../models/autor')

// Lista todos os autores.
exports.index = function(req, res) {
    Autor.getAll((err, data) => {
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