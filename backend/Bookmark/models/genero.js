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

module.exports = Genero;