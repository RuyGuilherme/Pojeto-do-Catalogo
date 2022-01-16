//importar o mongoose - ferramenta que auxilia no desenvolvimento com banco de dados mongoBD.
const mongoose = require('mongoose');

const gamesModel = new mongoose.Schema({
  nome: { type: String, required: true},
  nota: { type: Number, required: true},
  plataforma: { type: String, required: true},
  valor: {type: String, required: true},
  genero: { type: String, required: true},
  anoLancamento: {type: String, required: true},
  dataCriacao: { type: Date, default: Date.now }
})

const Game = mongoose.model('games', gamesModel);

module.exports = Game;