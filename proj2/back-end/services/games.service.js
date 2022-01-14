const Game = require("./../models/games");

const getGames = async () => {
  
  const games = await Game.find();
  return games;
};

const getGameById = async (id) => {

  const game = await Game.findById(id)
  return game;
}

const createGame = async (game) => {
  
  return await Game.create(game)
}

const editGame = async (id, game) => {

  return await Game.findByIdAndUpdate(id, game);
}

const deleteGame = async (id) => {
  
  return await Game.findByIdAndDelete(id);
}

module.exports = {
  getGames,
  getGameById,
  createGame,
  editGame,
  deleteGame
};
