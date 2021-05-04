const database = require('../db');
const Capitulo = require('../models/capitulo');
const Estante = require('../models/estante');
const Leitura = require('../models/leitura')

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

// Busca estante expecifica.
exports.buscarEstante = function(req, res) {
    Estante.findById(req.params.id, (err, data) => {
        res.send(data);
    });
};

// Busca o capitulo atual da estante
exports.buscarCapituloAtual = function(req, res) {
    var capitulos = [];
    var ultima_leitura;
    Capitulo.getAllFromBook(Estante.book_id, (err, capitulos) => {
        Leitura.getLastByEstante(Estante.id, (err, ultima_leitura) =>{
            for(var i; i<capitulos.length; i++){
                if(capitulos[i].pagina_inicial >= ultima_leitura.leitura.pag){
                    if(capitulos[i].pagina_final <= ultima_leitura.leitura.pag){
                        res.send(capitulos[i]);
                    }
                }
            }
        })
    })
};

// Marca um livro como favorito
exports.favoritarLivro = function(req, res) {
    Estante.setFavorito(req.params.id, (err, data) => {
        res.send(data);
    });
};

// Remove um livro dos favoritos
exports.desfavoritarLivro = function(req, res) {
    Estante.removeFavorito(req.params.id, (err, data) => {
        res.send(data);
    });
};

// Avalia um livro
exports.avaliarLivro = function(req, res) {
    Estante.setAvaliacao(req.params.id, req.params.avaliacao, (err, data) => {
        res.send(data);
    });
};


// Progresso de leitura de um livro
exports.calcProgressoLeitura = function(req, res) {
    Estante.calcProgresso(req.params.id, (err, data) => {
        res.send(data);
    });
};
