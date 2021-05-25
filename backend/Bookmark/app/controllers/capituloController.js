const models = require('../models/index');
const Capitulo = models.Capitulo;

// Lista todas os capitulos.
exports.index = async function(req, res) {
    const result = await Capitulo.findAll();
    res.send(result);
};

// Busca todos os capitulos do livro
exports.buscarCapitulosDoLivro = async function(req, res) {
    const result = await Capitulo.findAll({
        where: {livro_id: req.params.livro_id}
    });
    res.send(result);
};
