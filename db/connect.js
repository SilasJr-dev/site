const mongoose = require('mongoose');
const { dbURI } = require('../configuração');

function conectar_db() {
    mongoose.connect(dbURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'erro na conexão:'));
    db.once('open', () => {
      console.log('[INFO] Conectado a DB com sucesso!');
    });
};

module.exports.conectar_db = conectar_db;