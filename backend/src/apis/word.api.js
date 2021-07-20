const wordApi = require('express').Router();
const wordController = require('../controllers/word.controller');
const { jwtAuthentication } = require('../middlewares/passport.middleware');

wordApi.post('/contribute/add-word', wordController.postContributeWord);

wordApi.get('/exist', wordController.getCheckWordExistence);
wordApi.get('/pack', wordController.getWordPack);
wordApi.get('/search-word', wordController.getSearchWord);
wordApi.get('/word-details', wordController.getWordDetails);
wordApi.get(
  '/favorite-list',
  jwtAuthentication,
  wordController.getUserFavoriteList,
);

module.exports = wordApi;
