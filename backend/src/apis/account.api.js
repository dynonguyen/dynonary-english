const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');
const { jwtAuthentication } = require('../middlewares/passport.middleware');

accountApi.post('/register', accountController.postRegisterAccount);
accountApi.post('/login', accountController.postLogin);

accountApi.get('/user-info', jwtAuthentication, accountController.getUserInfo);

module.exports = accountApi;