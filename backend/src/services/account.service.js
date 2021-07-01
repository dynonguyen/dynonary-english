const { ACCOUNT_TYPES, MAX } = require('../constant');
const AccountModel = require('../models/account.model/account.model');
const UserModel = require('../models/account.model/user.model');

exports.isExistAccount = async (email) => {
  try {
    return await AccountModel.exists({ email });
  } catch (error) {
    throw error;
  }
};

exports.findAccount = async (email) => {
  try {
    return await AccountModel.findOne({ email });
  } catch (error) {
    throw error;
  }
};

exports.createAccount = async (email, password) => {
  try {
    const newAccount = await AccountModel.create({
      email,
      password,
      authType: ACCOUNT_TYPES.LOCAL,
    });
    if (newAccount && newAccount._id) return newAccount._id;
    return null;
  } catch (error) {
    throw error;
  }
};

exports.createUser = async (accountId, username, name) => {
  try {
    const newUser = await UserModel.create({ accountId, name, username });
    if (newUser && newUser._id) return newUser;
    return null;
  } catch (error) {
    throw error;
  }
};

exports.isExistWordInFavorites = async (word, username) => {
  try {
    const regex = new RegExp(word, 'i');
    const isExist = await UserModel.exists({
      username,
      favoriteList: {
        $in: regex,
      },
    });

    return isExist;
  } catch (error) {
    throw error;
  }
};

exports.isLimitedFavorites = async (word, username) => {
  try {
    // check limit amount
    const user = await UserModel.findOne({ username }).select('favoriteList');
    const { favoriteList = null } = user;

    if (
      Array.isArray(favoriteList) &&
      favoriteList.length >= MAX.FAVORITES_LEN
    ) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

exports.updateFavoriteList = async (word, username, isAdd = false) => {
  try {
    if (isAdd) {
      return await UserModel.updateOne(
        { username },
        { $push: { favoriteList: word } },
      );
    }

    return await UserModel.updateOne(
      { username },
      { $pull: { favoriteList: { $in: word } } },
    );
  } catch (error) {
    throw error;
  }
};
