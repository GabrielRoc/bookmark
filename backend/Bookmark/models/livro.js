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
    const livro = sql.query("INSERT INTO Livro SET ?", newLivro);
    console.log("Livro criado");
    result(null, livro);
};

// Busca com filtro
Livro.get = async (filtro, result) => {

    var query_filtro = '';
    // Verifica quais os filtros q serão inseridos
    if(filtro.titulo != undefined && filtro.titulo != ''){
        query_filtro = `WHERE livro_titulo LIKE '%${filtro.titulo}%'`
    }
    if(filtro.autor != undefined && filtro.autor != ''){
        query_filtro = query_filtro == '' ? `WHERE autor_id = ${filtro.autor}` : `${query_filtro} AND autor_id = ${filtro.autor}`
    }
    if(filtro.genero != undefined && filtro.genero != ''){
        query_filtro = query_filtro == '' ? `WHERE genero_id = ${filtro.genero}` : `${query_filtro} AND genero_id = ${filtro.genero}`
    }

    const sql = await database.connect();
    const [livros] = await sql.query(`SELECT * FROM Livro ${query_filtro}`);
    result(null, livros);
    
};

// Busca tudo
// ! Não esta sendo usada
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

Livro.findByTitulo = async (titulo, result) => {
    const sql = await database.connect();
    const livro = await sql.query(`SELECT * FROM Livro WHERE livro_titulo = ${titulo}`);
    result(null, livro);
};

Livro.editById = async (editedLivro, livroId, result) => {
    const sql = await database.connect();
    const livro = sql.query(`UPDATE Livro SET ? WHERE id = ${livroId}`, editedLivro)
    console.log("Livro editado");
    result(null, editedLivro);
};

Livro.deleteById = async (livroId, result) => {
    const sql = await database.connect();
    const livro = await sql.query(`DELETE from Livro WHERE id = ${livroId}`);
    result(null, livro);
};


module.exports = Livro;