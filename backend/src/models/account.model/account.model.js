const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const { MAX, ACCOUNT_TYPES } = require('../../constant');

const accountTypeEnum = (function () {
  let list = [];
  for (let k in ACCOUNT_TYPES) {
    list.push(ACCOUNT_TYPES[k]);
  }
  return list;
})();

const accountSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    maxLength: MAX.EMAIL_LEN,
  },
  password: {
    type: String,
    default: null,
    maxLength: MAX.PASSWORD_LEN,
  },
  googleId: {
    type: String,
    default: null,
  },
  authType: {
    type: String,
    enum: accountTypeEnum,
    default: ACCOUNT_TYPES.LOCAL,
  },
  failedLoginTimes: {
    type: Number,
    default: 0,
  },
  refreshToken: {
    type: String,
    default: null,
  },
});

// hash password with bcrypt
// Note: callback should be a normal function -> use 'this'
accountSchema.pre('save', async function (next) {
  try {
    if (this.authType === 'local') {
      const saltRounds = parseInt(process.env.SALT_ROUND);
      //hashing password...
      const hashPassword = await bcrypt.hash(this.password, saltRounds);
      this.password = hashPassword;
      next();
    }
    next();
  } catch (error) {
    next(error);
  }
});

const AccountModel = mongoose.model('account', accountSchema, 'accounts');

module.exports = AccountModel;
