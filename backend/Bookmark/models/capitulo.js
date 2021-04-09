const database = require('../db');

// constructor
const Capitulo = function(capitulo) {
    this.id = capitulo.id;
    this.livro_id = capitulo.livro_id;
    this.pagina_inicial = capitulo.pagina_inicial;
    this.pagina_final = capitulo.pagina_final;
};

Capitulo.create = async (newCapitulo, result) => {
    const sql = await database.connect();
    const capitulo = sql.query("INSERT INTO Capitulo SET ?", newCapitulo)
    result(null, capitulo);
};

Capitulo.getAllFromBook = async (bookID, result) => {
    const sql = await database.connect();
    const [capitulos] = await sql.query(`SELECT * FROM Capitulo WHERE book_id = ${bookId}`);
    result(null, capitulos);
};

Capitulo.deleteByIdAndBook = async (id, bookId, result) => {
    const sql = await database.connect();
    const capitulo = await sql.query(`DELETE FROM Capitulo WHERE id = ${id} AND book_id = ${bookId}`);
    result(null, capitulo);
};

module.exports = Capitulo;