const database = require('../db');

// constructor
const Estante = function(estante) {
    this.usuario_id = estante.usuario_id;
    this.livro_id = estante.livro_id;
    this.est_flag = estante.est_flag;
    this.est_avaliacao = estante.est_avaliacao;
    this.est_pag_marcada = estante.est_pag_marcada;
};

Estante.create = async (newEstante, result) => {
    const sql = await database.connect();
<<<<<<< HEAD
    const livro = sql.query("INSERT INTO Estante SET ?", newEstante)
=======
    const estante = sql.query("INSERT INTO Estante SET ?", newLivro)
>>>>>>> 8f1fa2bd1e33c65a1157da9badd70f1174a2aa8e
    console.log("Livro criado");
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

module.exports = Estante;