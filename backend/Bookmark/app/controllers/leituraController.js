const models = require('../models/index');
const Leitura = models.Leitura;

// Lista todas as leituras
exports.index = async function(req, res) {
    const result = await Leitura.findAll();
    res.send(result);
};

// Adiciona uma nova leitura
exports.adicionarLeitura = async function(req, res) {
    const result = await Leitura.create(req.body.livro);
    res.send(result);
};

// Consulta todas as leituras de uma estante
exports.consultarLeituras = async function(req, res) {
    const result = await Leitura.findAll({
        where: {estante_id: req.params.estante_id}
    });
    res.send(result);
};

// Consulta a ultima leitura de uma estante
exports.consultarUltimaLeitura = async function(req, res) {
    const result = await Leitura.findOne({
        attributes: [Sequelize.fn('max', Sequelize.col('updatedAt'))],
        raw: true,
    });
    res.send(result);
};