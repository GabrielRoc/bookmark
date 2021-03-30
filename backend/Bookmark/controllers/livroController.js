const database = require('../db');
const Livro = require('../models/livro')

// Lista todos os livros.
exports.index = function(req, res) {
    Livro.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Busca livro expecifico.
exports.buscarLivro = function(req, res) {
    Livro.findById(req.params.id, (err, data) => {
        res.send(data);
    });
};

// Adiciona um novo livro.
exports.adicionarLivro = function(req, res) {
    const livro = new Livro(req.body.livro);
    Livro.create(livro, (err, data) => {
        res.send(data);
    });
};

// Editar um livro.
exports.editarLivro = function(req, res) {
    res.send('NOT IMPLEMENTED: editar livro');
};

// Remover um livro.
exports.removerLivro = function(req, res) {
    res.send('NOT IMPLEMENTED: remover livro');
};

/**
 * ADICIONA GENERO PARA TESTE
 */
// (async () => {
//     // const dados_livro = req.body.livro;
//     const conn = await database.connect();
//     const sql = 'INSERT INTO Genero(gen_nome) VALUES (?);';
//     const values = ['Fantasia'];
//     const genero = await conn.query(sql, values);
//     res.send(genero);
// })();