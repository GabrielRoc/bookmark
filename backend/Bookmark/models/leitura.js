const database = require('../db');

// constructor
const Leitura = function(leitura) {
    this.estante_id = leitura.estante_id;
    this.leitura_data = leitura.leitura_data;
    this.leitura_pag = leitura.leitura_pag;
};

Leitura.create = async (newLeitura, result) => {
    const sql = await database.connect();
    const leitura = sql.query("INSERT INTO Leitura SET ?", newLeitura)
    result(null, leitura);
};

Leitura.getByEstante = async (estanteId, result) => {
    const sql = await database.connect();
    const [leituras] = await sql.query(`SELECT * FROM Leitura WHERE estante_id = ${estanteId}`);
    result(null, leituras);
};

Leitura.getLastByEstante = async (estanteId, result) => {
    const sql = await database.connect();
    const [leituras] = await sql.query(`SELECT * FROM Leitura WHERE estante_id = ${estanteId} AND MAX(leitura_data)`);
    result(null, leituras);
};
