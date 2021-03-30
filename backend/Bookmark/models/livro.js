const database = require('../db');

// constructor
const Livro = function(livro) {
    this.autor_id = livro.autor_id;
    this.genero_id = livro.genero_id;
    this.livro_titulo = livro.livro_titulo;
    this.livro_subtitulo = livro.livro_subtitulo;
    this.livro_volume = livro.livro_volume;
    this.livro_num_pag = livro.livro_num_pag;
    this.livro_capa = livro.livro_capa;
    this.livro_editora = livro.livro_editora;
    this.livro_sinopse = livro.livro_sinopse;
    this.livro_avaliacao = livro.livro_avaliacao;
    this.livro_previa = livro.livro_previa;
};

Livro.create = async (newLivro, result) => {
    const sql = await database.connect();
    const livro = sql.query("INSERT INTO Livro SET ?", newLivro)
    console.log("Livro criado");
    result(null, newLivro);
};

Livro.getAll = async result => {
    const sql = await database.connect();
    const [livros] = await sql.query("SELECT * FROM Livro");
    result(null, livros);
};

Livro.findById = async (livroId, result) => {
    const sql = await database.connect();
    const livro = await sql.query(`SELECT * FROM Livro WHERE id = ${livroId}`);
    result(null, livro);
};

module.exports = Livro;