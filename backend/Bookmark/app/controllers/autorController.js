const models = require('../models/index');
const Autor = models.Autore;

// Lista todos os autores.
exports.index = async function(req, res) {
    const result = await Autor.findAll();
    res.send(result);
};

// Busca autor expecifico.
exports.buscarAutor = async function(req, res) {
    const result = await Autor.findAll({
        where: {id: req.params.id}
    });
    res.send(result);
};

// Adiciona um novo autor.
exports.adicionarAutor = async function(req, res) {
    const result = await Autor.create(req.body.autor);
    res.send(result);
};

// Editar um autor.
exports.editarAutor = async function(req, res) {
    const result = await Autor.update(req.body.autor,
        {
            where: {id: req.params.id}
        }
    )
    res.send(result);
};

// Remover um autor.
exports.removerAutor = async function(req, res) {
    const result = await Autor.destroy({
        where: {id: req.body.id}
    })
    res.send(result);
};
