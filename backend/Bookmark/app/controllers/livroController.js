const models = require('../models/index');
const Livro = models.Livro;

// Lista todos os livros.
exports.index = async function (req, res) {

    const { Op } = require("sequelize");
    var query_filtro = {};
    // Verifica quais os filtros q serão inseridos
    if (req.headers.titulo != undefined && req.headers.titulo != '') {
        query_filtro.livro_titulo = {
            [Op.like]: `%${req.headers.titulo}%`
        }
    }
    if (req.headers.autor != undefined && req.headers.autor != '') {
        query_filtro.autor_id = req.headers.autor
    }
    if (req.headers.genero != undefined && req.headers.genero != '') {
        query_filtro.genero_id = req.headers.genero
    }

    const result = await Livro.findAll(
        {
            where: query_filtro
        }
    );
    res.send(result);
};

// Busca livro expecifico.
exports.buscarLivro = async function (req, res) {
    const result = await Livro.findAll({
        where: { id: req.params.id }
    });
    res.send(result);
};

// Adiciona um novo livro.
exports.adicionarLivro = async function (req, res) {
    const result = await Livro.create(req.body.livro);
    res.send(result);
};

// Editar um livro.
exports.editarLivro = async function (req, res) {
    const result = await Livro.update(req.body.livro,
        {
            where: { id: req.params.id }
        }
    )
    res.send(result);
};

// Remover um livro.
exports.removerLivro = async function (req, res) {
    const result = await Livro.destroy({
        where: { id: req.body.id }
    })
    res.send(result);
};
