const mongoose = require('mongoose');

const Conn = () => {
  mongoose.connect('mongodb://localhost:27017/loja', {
    useNewUrlParser: true
  }).then(() => {
    console.log('MONGO DB CONECTADO')
  }).catch((err) => {
    return console.log(`Erro na conexao com o banco: ${err}`)
  })
}

module.exports = Conn;