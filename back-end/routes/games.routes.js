const express = require('express');

const gamesController = require('./../controllers/games.controller')

const router = express.Router();

router.get('/', gamesController.getGames);

router.get('/:id', gamesController.getGameById);

router.post('/add', gamesController.createGame);

router.put('/edit/:id', gamesController.editGame);

router.delete('/delete/:id', gamesController.deleteGame);


module.exports = router;