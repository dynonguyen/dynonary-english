const sentenceApi = require('express').Router();
const sentenceController = require('../controllers/sentence.controller');

sentenceApi.post(
  '/contribute/add-sentence',
  sentenceController.postContributeSentence,
);

sentenceApi.get('/total', sentenceController.getTotalSentences);

sentenceApi.get('/list', sentenceController.getSentenceList);

module.exports = sentenceApi;
