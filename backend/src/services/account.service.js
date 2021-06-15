const { ACCOUNT_TYPES } = require('../constant');
const AccountModel = require('../models/account.model/account.model');
const UserModel = require('../models/account.model/user.model');

exports.isExistAccount = async (email) => {
  try {
    return await AccountModel.exists({ email });
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
