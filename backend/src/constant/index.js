exports.ACCOUNT_TYPES = {
  LOCAL: 'local',
  GOOGLE: 'gg',
  FACEBOOK: 'fb',
};

exports.COOKIE_EXPIRES_TIME = 7 * 24 * 3600; // 7 days (by sec)

exports.JWT_EXPIRES_TIME = 7 * 24 * 3600; // 7 days (by sec)

exports.KEYS = {
  JWT_TOKEN: 'token',
};

exports.MAX = {
  SIZE_JSON_REQUEST: '25mb',
  EMAIL_LEN: 100,
  PASSWORD_LEN: 40,
  NAME_LEN: 50,
  USER_NAME: 110,
};

exports.MIN = {
  PASSWORD_LEN: 6,
};

exports.SPECIALTY_TYPES = [
  {
    type: '0',
    name: 'Không',
  },
  {
    type: '1',
    name: 'Công nghệ thông tin',
  },
  {
    type: '2',
    name: 'Du lịch',
  },
];

exports.TOPIC_TYPES = [
  {
    type: '0',
    name: 'Bất kỳ',
  },
  {
    type: '1',
    name: 'Từ vựng TOEIC',
  },
  {
    type: '2',
    name: 'Từ vựng IELTS',
  },
  {
    type: '3',
    name: 'Tiếng anh giao tiếp',
  },
  {
    type: '4',
    name: 'Nghề nghiệp',
  },
  {
    type: '5',
    name: 'Con vật',
  },
  {
    type: '6',
    name: 'Rau củ',
  },
  {
    type: '7',
    name: 'Cơ thể con người',
  },
  {
    type: '8',
    name: 'Đồ ăn',
  },
];
