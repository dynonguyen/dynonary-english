const flashcardApi = require('express').Router();
const flashcardController = require('../controllers/flashcard.controller');

flashcardApi.get('/word-pack', flashcardController.getWordPack);

module.exports = flashcardApi;
