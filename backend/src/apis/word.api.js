const wordApi = require('express').Router();
const wordController = require('../controllers/word.controller');

wordApi.post('/contribute/add-word', wordController.postContributeWord);

wordApi.get('/exist', wordController.getCheckWordExistence);
wordApi.get('/pack', wordController.getWordPack);
wordApi.get('/search-word', wordController.getSearchWord);
wordApi.get('/word-details', wordController.getWordDetails);

module.exports = wordApi;
