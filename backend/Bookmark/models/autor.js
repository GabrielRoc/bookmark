const database = require('../db');

// constructor
const Autor = function(autor) {
    this.autor_nome = autor.autor_nome;
    this.autor_imagem = autor.autor_imagem;
    this.autor_biografia = autor.autor_biografia;
};

Autor.create = async (newLAutor, result) => {
    const sql = await database.connect();
    const autor = sql.query("INSERT INTO Autor SET ?", newLAutor);
    console.log("Autor criado");
    result(null, autor);
};

// Busca tudo
Autor.getAll = async result => {
    const sql = await database.connect();
    const [autores] = await sql.query("SELECT * FROM Autor");
    result(null, autores);
};

Autor.findById = async (autorId, result) => {
    const sql = await database.connect();
    const autor = await sql.query(`SELECT * FROM Autor WHERE id = ${autorId}`);
    result(null, autor);
};

Autor.editById = async (editedAutor, autorId, result) => {
    const sql = await database.connect();
    const autor = sql.query(`UPDATE Autor SET ? WHERE id = ${autorId}`, editedAutor)
    console.log("Autor editado");
    result(null, autor);
};

Autor.deleteById = async (autorId, result) => {
    const sql = await database.connect();
    const autor = await sql.query(`DELETE from Autor WHERE id = ${autorId}`);
    result(null, autor);
};


module.exports = Autor;