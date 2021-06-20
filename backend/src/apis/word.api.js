const wordApi = require('express').Router();
const wordController = require('../controllers/word.controller');

wordApi.post('/contribute/add-word', wordController.postContributeWord);

module.exports = wordApi;
