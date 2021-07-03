exports.ACCOUNT_TYPES = {
  LOCAL: 'local',
  GOOGLE: 'gg',
  FACEBOOK: 'fb',
};

exports.COOKIE_EXPIRES_TIME = 7 * 24 * 3600 * 1000; // 7 days (by sec)

exports.JWT_EXPIRES_TIME = 7 * 24 * 3600 * 1000; // 7 days (by sec)

exports.KEYS = {
  JWT_TOKEN: 'token',
};

exports.MAX = {
  SIZE_JSON_REQUEST: '25mb',
  EMAIL_LEN: 100,
  PASSWORD_LEN: 40,
  NAME_LEN: 50,
  USER_NAME: 110,
  LEN_WORD_PACK: 5,
  FAVORITES_LEN: 200,
  USER_COIN: 99999,
};

exports.DEFAULT = {
  USER_COIN: 100,
};

exports.MIN = {
  PASSWORD_LEN: 6,
  CONFUSING_LIST: 20,
};

exports.NUM_OF_TOPICS = 30;

exports.NUM_OF_SPECIALTY = 30;
