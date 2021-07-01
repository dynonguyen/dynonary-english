const { createUsername } = require('../helper');
const bcrypt = require('bcryptjs');
const {
  isExistAccount,
  createAccount,
  createUser,
  findAccount,
  checkAddWordIntoFavorites,
  updateFavoriteList,
  isExistWordInFavorites,
  isLimitedFavorites,
} = require('../services/account.service');
const { COOKIE_EXPIRES_TIME, KEYS } = require('../constant');
const jwtConfig = require('../configs/jwt.config');
const express = require('express');
const app = express();

exports.postRegisterAccount = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const email = req.body.email?.toLowerCase();

    // check account existence
    const isExist = await isExistAccount(email);
    if (isExist) {
      return res.status(400).json({ message: 'Email đã được sử dụng' });
    }

    // create an account
    const newAccountId = await createAccount(email, password);
    if (!newAccountId) {
      return res
        .status(409)
        .json({ message: 'Tạo tài khoản thất bại, thử lại' });
    }

    // create an user
    const username = createUsername(email, newAccountId);
    const newUser = await createUser(newAccountId, username, name);
    if (!newUser) {
      return res
        .status(409)
        .json({ message: 'Tạo tài khoản thất bại, thử lại' });
    }

    return res.status(200).json({ message: 'Tạo tài khoản thành công' });
  } catch (error) {
    console.error('POST REGISTER ACCOUNT ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const email = req.body.email?.toLowerCase();
    const { password } = req.body;

    // check account existence
    const account = await findAccount(email);
    if (!account) {
      return res.status(406).json({ message: 'Tài khoản không tồn tại' });
    }

    // check password
    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mật khẩu không đúng' });
    }

    // set cookie with jwt
    const token = await jwtConfig.encodedToken(
      process.env.JWT_SECRET_KEY || 'dynonary-serect',
      { accountId: account._id },
    );
    res.cookie(KEYS.JWT_TOKEN, token, {
      httpOnly: true,
      expires: new Date(Date.now() + COOKIE_EXPIRES_TIME),
    });

    return res.status(200).json({
      message: 'success',
      key: KEYS.JWT_TOKEN,
      token,
      expires: new Date(Date.now() + COOKIE_EXPIRES_TIME),
    });
  } catch (error) {
    console.error('POST REGISTER ACCOUNT ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.postLogout = async (req, res, next) => {
  try {
    res.clearCookie(KEYS.JWT_TOKEN);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error('POST LOG OUT ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.putToggleFavorite = async (req, res) => {
  try {
    const { word, username, isAdd = false } = req.body;

    const isExist = await isExistWordInFavorites(word, username);

    if (isAdd) {
      const isLimited = await isLimitedFavorites(word, username);

      if (isLimited) {
        return res.status(409).json({
          message:
            'Số từ đã vượt quá số lượng tối đa của danh sách yêu thích. Hãy nâng cấp nó.',
        });
      }

      if (isExist) {
        return res
          .status(406)
          .json({ message: `Từ ${word} đã tồn tại trong danh sách` });
      }
    } else {
      if (!isExist) {
        return res
          .status(406)
          .json({ message: `Từ ${word} không tồn tại trong danh sách` });
      }
    }

    const updateStatus = await updateFavoriteList(word, username, isAdd);

    if (updateStatus && updateStatus.ok && updateStatus.nModified) {
      return res.status(200).json({ message: 'success' });
    } else {
      return res.status(409).json({ message: 'failed' });
    }

    console.log(updateStatus);
  } catch (error) {
    console.error('PUT TOGGLE FAVORITE ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getUserInfo = async (req, res, next) => {
  try {
    const { isAuth = false } = res.locals;
    if (!isAuth) {
      return res.status(401).json({ message: 'Failed' });
    }
    return res.status(200).json({ user: req.user });
  } catch (error) {
    console.error('GET USER INFO ERROR: ', error);
    return res.status(401).json({ message: 'Failed' });
  }
};
