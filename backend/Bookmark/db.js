async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://gabrielr_projetointegrador:EssaSenhaEspecial@servidor.gabrielrocha.net.br:3306/gabrielr_projetointegrador");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {connect}