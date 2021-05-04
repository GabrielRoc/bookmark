const database = require('../db');

// constructor
const Estante = function (estante) {
    this.id = estante.id;
    this.usuario_id = estante.usuario_id;
    this.livro_id = estante.livro_id;
    this.est_flag = estante.est_flag;
    this.est_fav = estante.est_fav;
    this.est_avaliacao = estante.est_avaliacao;
    this.est_pag_marcada = estante.est_pag_marcada;
};

Estante.create = async (newEstante, result) => {
    const sql = await database.connect();
    const estante = sql.query("INSERT INTO Estante SET ?", newEstante)
    result(null, estante);
};

Estante.getAll = async result => {
    const sql = await database.connect();
    const [estantes] = await sql.query("SELECT * FROM Estante");
    result(null, estantes);
};

Estante.getAllFromUser = async (userId, result) => {
    const sql = await database.connect();
    const [estantes] = await sql.query(`SELECT * FROM Estante WHERE user_id = ${userId}`);
    result(null, estantes);
};

Estante.findById = async (estanteId, result) => {
    const sql = await database.connect();
    const estante = await sql.query(`SELECT * FROM Estante WHERE id = ${estanteId}`);
    result(null, estante);
};

Estante.findByUserAndBook = async (userId, bookId, result) => {
    const sql = await database.connect();
    const estante = await sql.query(`SELECT * FROM Estante WHERE user_id = ${userId} AND livro_id = ${bookId}`);
    result(null, estante);
};

Estante.deleteById = async (estanteId, result) => {
    const sql = await database.connect();
    const estante = await sql.query(`DELETE FROM Estante WHERE id = ${estanteId}`);
    result(null, estante);
};

Estante.setFavorito = async (estanteId, result) => {
    const sql = await database.connect();
    const estante = await sql.query(`UPDATE Estante SET est_fav = "TRUE" WHERE id = ${estanteId}`);
    result(null, estante);
};

Estante.removeFavorito = async (estanteId, result) => {
    const sql = await database.connect();
    const estante = await sql.query(`UPDATE Estante SET est_fav = "FALSE" WHERE id = ${estanteId}`);
    result(null, estante);
};

Estante.setAvaliacao = async (estanteId, avaliacao, result) => {
    const sql = await database.connect();
    const estante = await sql.query(`UPDATE Estante SET est_avaliacao = ${avaliacao} WHERE id = ${estanteId}`);
    result(null, estante);
};

Estante.calcProgresso = async (estanteId, result) => {
    const sql = await database.connect();
    const leitura = await sql.query(`SELECT * FROM Leitura  WHERE estante_id = ${estanteId} ORDER BY leitura_data DESC`);
    const livro = await sql.query(`SELECT * FROM Livro where id IN (SELECT livro_id FROM Estante WHERE Estante.id = ${estanteId})`);

    var pags_lidas = leitura[0][0].leitura_pag;
    var pags_livro = livro[0][0].livro_num_pag;

    var progresso = (pags_lidas * 100) / pags_livro;


    result(null, [{ progresso }]);
};


module.exports = Estante;

