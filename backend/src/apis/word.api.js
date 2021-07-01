const wordApi = require('express').Router();
const wordController = require('../controllers/word.controller');

wordApi.post('/contribute/add-word', wordController.postContributeWord);

wordApi.get('/exist', wordController.getCheckWordExistence);
wordApi.get('/pack', wordController.getWordPack);

module.exports = wordApi;
