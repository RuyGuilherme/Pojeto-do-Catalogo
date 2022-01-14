const mongoose = require('mongoose');
const gamesService = require("../services/games.service");


const getGames = async (req, res) => {
  const games = await gamesService.getGames();
  
  res.send(games);
}


const getGameById = async (req, res) => {
  
  const id = req.params.id;

  
  if(!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({message: 'Id Invalido, porfavor verifique as informações.'})
    return
  }

  
  const game = await gamesService.getGameById(id);
  
  
  if(!game) {
    res.status(404).send({message: 'Filme nao encontrado'});
    return;
  }

  res.send(game);
}


const createGame = async (req, res) => {
 
  const game = req.body;

  await gamesService.createGame(game)
  .then(() => {
    res.send({message: `Game ${game.nome} cadastrado com sucesso!`})
  })
  .catch((err) => {
    res.status(500).send({message: `Erro no servidor: ${err}`});
  })
}


const editGame = async (req, res) => {
  
  const id = req.params.id;
  
  const gameEdit = req.body;

  
  await gamesService.editGame(id, gameEdit)
  .then(() => res.send({message: 'Game Editado com sucesso'}))
  .catch(err => res.status(500).send({message: `Erro no servidor: ${err}`}))
}


const deleteGame = async (req, res) => {
  const id = req.params.id;

  await gamesService.deleteGame(id)
  .then(() => res.send({message: 'Game excluido com sucesso'}))
  .catch((err) => res.status(500).send({message: `Erro no servidor: ${err}`}))

}

module.exports = {
  getGames,
  getGameById,
  createGame,
  editGame,
  deleteGame
}