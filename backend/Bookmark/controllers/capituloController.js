const database = require('../db');
const Capitulo = require('../models/capitulo');
const Estante = require('../models/capitulo')

// Lista todas os capitulos.
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

// Busca todos os capitulos do livro
exports.buscarCapitulosDoLivro = function(req, res) {
    Capitulo.getAllFromBook(req.params.bookID, (err, data) => {
        res.send(data);
    });
};

