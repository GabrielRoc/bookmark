const Livro = require('../models/livro');
const database = require('../db');

// Lista todos os livros.
exports.index = function(req, res) {

    // async function selectLivros(){
    //     const conn = await database.connect();
    //     const [rows] = await conn.query('SELECT * FROM livros;');
    //     return rows;
    // }

    // res.send(selectLivros());

    (async () => {
        console.log('Começou!');
    
        console.log('SELECT * FROM livros');
        const livros = await database.selectLivros();
        res.send(livros);
    })();
};

// Busca livro expecifico.
exports.buscarLivro = function(req, res) {
    res.send('NOT IMPLEMENTED: buscar livro');
};

// Adiciona um novo livro.
exports.adicionarLivro = function(req, res) {
    
    console.log('oi');

    // res.send(req)
    // const resultadoCreate = await Livro.create(req)
    // res.send('NOT IMPLEMENTED: adicionar livro');
};

// Editar um livro.
exports.editarLivro = function(req, res) {
    res.send('NOT IMPLEMENTED: editar livro');
};

// Remover um livro.
exports.removerLivro = function(req, res) {
    res.send('NOT IMPLEMENTED: remover livro');
};