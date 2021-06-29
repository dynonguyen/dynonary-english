const sentenceApi = require('express').Router();
const sentenceController = require('../controllers/sentence.controller');

sentenceApi.post(
  '/contribute/add-sentence',
  sentenceController.postContributeSentence,
);

module.exports = sentenceApi;
