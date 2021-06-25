const commonApi = require('express').Router();
const commonController = require('../controllers/common.controller');

commonApi.get('/word-pack/total', commonController.getTotalWordPack);

module.exports = commonApi;
