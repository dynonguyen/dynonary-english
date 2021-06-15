const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');

accountApi.post('/register', accountController.postRegisterAccount);

module.exports = accountApi;
