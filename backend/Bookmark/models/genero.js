const database = require('../db');

// constructor
const Genero = function(genero) {
    this.gen_nome = genero.gen_nome;
};

Genero.create = async (newGenero, result) => {
    const sql = await database.connect();
    const genero = sql.query("INSERT INTO Genero SET ?", newGenero);
    console.log("Genero criado");
    result(null, genero);
};

// Busca tudo
Genero.getAll = async result => {
    const sql = await database.connect();
    const [generos] = await sql.query("SELECT * FROM Genero");
    result(null, generos);
};

Genero.findById = async (generoId, result) => {
    const sql = await database.connect();
    const genero = await sql.query(`SELECT * FROM Genero WHERE id = ${generoId}`);
    result(null, genero);
};

Genero.editById = async (editedGenero, generoId, result) => {
    const sql = await database.connect();
    const genero = sql.query(`UPDATE Genero SET ? WHERE id = ${generoId}`, editedGenero)
    console.log("Genero editado");
    result(null, genero);
};

Genero.deleteById = async (generoId, result) => {
    const sql = await database.connect();
    const genero = await sql.query(`DELETE from Genero WHERE id = ${generoId}`);
    result(null, genero);
};

module.exports = Genero;