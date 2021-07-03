const mongoose = require('mongoose');
const { MAX, DEFAULT } = require('../../constant');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'account' },
  name: { type: String, trim: true, required: true, maxLength: MAX.NAME_LEN },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    maxLength: MAX.USER_NAME,
  },
  avt: { type: String, trim: true, default: '' },
  coin: {
    type: Number,
    required: true,
    default: DEFAULT.USER_COIN,
    min: 0,
    max: MAX.USER_COIN,
  },
  favoriteList: [String],
});

const UserModel = mongoose.model('user', userSchema, 'users');

module.exports = UserModel;
