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

module.exports = Autor;