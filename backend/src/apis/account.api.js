const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');

accountApi.post('/register', accountController.postRegisterAccount);
accountApi.post('/login', accountController.postLogin);
module.exports = accountApi;
