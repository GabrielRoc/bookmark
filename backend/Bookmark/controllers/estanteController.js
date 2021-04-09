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

// Busca o capitulo atual
exports.buscarCapituloAtual = function(req, res) {

    res.send('NOT IMPLEMENTED: buscar capitulo atual');
};
