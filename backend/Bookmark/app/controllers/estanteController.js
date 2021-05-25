const models = require('../models/index');
const Estante = models.Estante;
const Leitura = models.Leitura;
const Livro = models.Livro;

// Lista todas as estantes.
exports.index = async function (req, res) {
    const result = await Estante.findAll();
    res.send(result);
};

// Adiciona livro na estante
exports.adicionarLivroEstante = async function (req, res) {
    const result = await Estante.create(req.body.estante);
    res.send(result);
};

// Busca estante expecifica.
exports.buscarEstante = async function (req, res) {
    const result = await Estante.findAll({
        where: { id: req.params.id }
    });
    res.send(result);
};

// Busca estantes do usuário.
exports.buscarEstante = async function (req, res) {
    const result = await Estante.findAll({
        where: { usuario_id: req.params.usuario_id }
    });
    res.send(result);
};

// Marca um livro como favorito
exports.favoritarLivro = async function (req, res) {
    const result = await Estante.update({ est_fav: TRUE },
        {
            where: { id: req.params.id }
        }
    )
    res.send(result);
};

// Remove um livro dos favoritos
exports.desfavoritarLivro = async function (req, res) {
    const result = await Estante.update({ est_fav: FALSE },
        {
            where: { id: req.params.id }
        }
    )
    res.send(result);
};

// Avalia um livro
exports.avaliarLivro = async function (req, res) {
    const result = await Estante.update({ est_avaliacao: req.params.est_avalicao },
        {
            where: { id: req.params.id }
        }
    )
    res.send(result);
};

// Progresso de leitura de um livro
exports.calcProgressoLeitura = async function (req, res) {

    const leitura = await Leitura.findAll({ where: { estante_id: req.params.id }, order: [['createdAt', 'DESC']] });
    const estante = await Estante.findOne({ where: { id: req.params.id } });
    const livro = await Livro.findOne({ where: { id: estante.livro_id } });

    var pags_lidas = leitura[0].leitura_pag;
    var pags_livro = livro.livro_num_pag;

    var progresso = (pags_lidas * 100) / pags_livro;

    res.send({ progresso });
};


// Estima quantidades de paginas lidas por data
exports.estimaLeituraPorData = async function (req, res) {

    var pags_lidas = 0;
    var livro_sendo_lido = 0;
    var ultima_pg_lida = 0;
    
    const { Op } = require("sequelize");
    const leitura = await Leitura.findAll({
        where: {
            createdAt: {
                [Op.between]: [new Date(`'${req.headers.data_inicio}'`), new Date(`'${req.headers.data_fim}'`)],
            },
        },
    });

    leitura.forEach(livro => {
        if (livro.estante_id === livro_sendo_lido) {
            pags_lidas += (livro.leitura_pag - ultima_pg_lida);
            ultima_pg_lida = livro.leitura_pag;
        } else {
            ultima_pg_lida = 0;
            pags_lidas += livro.leitura_pag;
            ultima_pg_lida = livro.leitura_pag;
        }
        livro_sendo_lido = livro.estante_id

    });

    res.send({ pags_lidas });
};