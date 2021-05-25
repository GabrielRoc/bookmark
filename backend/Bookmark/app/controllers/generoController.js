const models = require('../models/index');
const Genero = models.Genero;

// Lista todos os generos.
exports.index = async function(req, res) {
    const result = await Genero.findAll();
    res.send(result);
};

// Busca genero expecifico.
exports.buscarGenero = async function(req, res) {
    const result = await Genero.findAll({
        where: {id: req.params.id}
    });
    res.send(result);
};

// Adiciona um novo genero.
exports.adicionarGenero = async function(req, res) {
    const result = await Genero.create(req.body.genero);
    res.send(result);
};

// Editar um genero.
exports.editarGenero = async function(req, res) {
    const result = await Genero.update(req.body.genero,
        {
            where: {id: req.params.id}
        }
    )
    res.send(result);
};

// Remover um genero.
exports.removerGenero = async function(req, res) {
    const result = await Genero.destroy({
        where: {id: req.body.id}
    })
    res.send(result);
};
