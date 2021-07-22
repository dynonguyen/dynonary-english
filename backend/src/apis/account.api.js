const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');
const passport = require('passport');
const passportConfig = require('../middlewares/passport.middleware');

accountApi.post('/register', accountController.postRegisterAccount);
accountApi.post('/login', accountController.postLogin);
accountApi.post('/logout', accountController.postLogout);
accountApi.post(
  '/login-gg',
  passport.authenticate('google-token', { session: false }),
  accountController.postLoginSocialNetwork,
);
accountApi.post(
  '/login-fb',
  passport.authenticate('facebook-token', { session: false }),
  accountController.postLoginSocialNetwork,
);

accountApi.put('/toggle-favorite', accountController.putToggleFavorite);
accountApi.put(
  '/update-coin',
  passportConfig.jwtAuthentication,
  accountController.putUpdateUserCoin,
);

accountApi.get(
  '/user-info',
  passportConfig.jwtAuthentication,
  accountController.getUserInfo,
);

module.exports = accountApi;
