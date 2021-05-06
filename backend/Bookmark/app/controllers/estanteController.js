const models = require('../models/index');
const Estante = models.Estante;

// Lista todas as estantes.
exports.index = async function(req, res) {
    const result = await Estante.findAll();
    res.send(result);
};

// Busca estante expecifica.
exports.buscarEstante = async function(req, res) {
    const result = await Estante.findAll({
        where: {id: req.params.id}
    });
    res.send(result);
};

// Busca estantes do usuário.
exports.buscarEstante = async function(req, res) {
    const result = await Estante.findAll({
        where: {usuario_id: req.params.usuario_id}
    });
    res.send(result);
};

// Marca um livro como favorito
exports.favoritarLivro = async function(req, res) {
    const result = await Estante.update({est_fav: TRUE},
        {
            where: {id: req.params.id}
        }
    )
    res.send(result);
};

// Remove um livro dos favoritos
exports.desfavoritarLivro = async function(req, res) {
    const result = await Estante.update({est_fav: FALSE},
        {
            where: {id: req.params.id}
        }
    )
    res.send(result);
};

// Avalia um livro
exports.avaliarLivro = async function(req, res) {
    const result = await Estante.update({est_avaliacao: req.params.est_avalicao},
        {
            where: {id: req.params.id}
        }
    )
    res.send(result);
};

