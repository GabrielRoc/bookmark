const database = require('../db');

// constructor
const Leitura = function(leitura) {
    this.estante_id = leitura.estante_id;
    this.leitura_data = leitura.leitura_data;
    this.leitura_pag = leitura.leitura_pag;
};

Leitura.create = async (newLeitura, result) => {
    const sql = await database.connect();
    const livro = sql.query("INSERT INTO Leitura SET ?", newLeitura)
    result(null, newLeitura);
};
