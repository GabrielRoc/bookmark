const database = require('../db');
const Leitura = require('../models/leitura')

// Lista todas as leituras
exports.index = function(req, res) {
    Leitura.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Adiciona uma nova leitura
exports.adicionarLeitura = function(req, res) {
    const leitura = new Leitura(req.body.leitura);
    Leitura.create(leitura, (err, data) => {
        res.send(data);
    });
};