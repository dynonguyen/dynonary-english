const highscoreApi = require('express').Router();
const highscoreController = require('../controllers/highscore.controller');

highscoreApi.put('/update', highscoreController.putUpdateHighScore);

highscoreApi.get('/leaderboard', highscoreController.getLeaderboard);

module.exports = highscoreApi;
