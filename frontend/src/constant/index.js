export const COLOR_VAR_KEYS = [
  { key: '--primary-color', label: 'Primary' },
  { key: '--secondary-color', label: 'Secondary' },
  { key: '--accent-color', label: 'Accent' },
  { key: '--bg-color-main', label: 'Background primary' },
  { key: '--bg-color-sec', label: 'Background secondary' },
  { key: '--bg-color-accent', label: 'Background accent' },
  { key: '--hover-color', label: 'Hover color' },
  { key: '--title-color', label: 'Title' },
  { key: '--text-color', label: 'Text' },
  { key: '--phonetic-color', label: 'Phonetic' },
];

export const DEFAULTS = {
  VOICE_URI: 'Google US English',
  VOICE_SPEED: 1,
  VOICE_VOLUME: 1,
};

export const LINKS = {
  FB: 'https://fb.com/TuanNguyen250400',
};

export const MAX = {
  EMAIL_LEN: 100,
  PASSWORD_LEN: 40,
  NAME_LEN: 50,
  SEARCH_LEN: 50,
};

export const MIN = {
  PASSWORD_LEN: 6,
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  IPA: '/IPA',
  CONTRIBUTION: '/contribution',
};

export const REGEX = {
  NAME: /^[^\d~`!@#$%^&*\(\)\\\|\.,\?\/\-\+\=\_]+$/gi,
};

export const THEME_KEYS = {
  ROOT_KEY: 'data-theme',
  LS_KEY: 'theme',
  PALETTE_KEY: 'palettes',
  LIGHT: 'light',
  DARK: 'dark',
  CUSTOM: 'custom',
};

export const UX = {
  DELAY_TIME: 1500,
};

export const VOICE_KEYS = {
  LS_KEY: 'voice',
};

export const WORD_TYPES = [
  {
    value: 'n',
    label: 'Noun - Danh từ',
  },
  {
    value: 'adj',
    label: 'Adjective - Tính từ',
  },
  {
    value: 'adv',
    label: 'Adverb - Trạng từ',
  },
  {
    value: 'v',
    label: 'Verb - Động từ',
  },
  {
    value: 'pro',
    label: 'Pronoun - Đại từ',
  },
  {
    value: 'con',
    label: 'Conjunction - Liên từ',
  },
  {
    value: 'pre',
    label: 'Preposition - Giới từ',
  },
  {
    value: 'det',
    label: 'Determiners - Hạn định từ',
  },
];

export const WORD_LEVELS = [
  {
    value: 'A0',
    label: 'A0',
  },
  {
    value: 'A1',
    label: 'A1',
  },
  {
    value: 'A2',
    label: 'A2',
  },
  {
    value: 'B1',
    label: 'B1',
  },
  {
    value: 'B2',
    label: 'B2',
  },
  {
    value: 'C1',
    label: 'C1',
  },
  {
    value: 'C2',
    label: 'C2',
  },
];

export const WORD_TOPICS = [
  {
    value: '0',
    label: 'Bất kỳ',
  },
  {
    value: '1',
    label: 'Từ vựng TOEIC',
  },
  {
    value: '2',
    label: 'Từ vựng IELTS',
  },
  {
    value: '3',
    label: 'Giao tiếp',
  },
  {
    value: '4',
    label: 'Đồ ăn',
  },
  {
    value: '5',
    label: 'Du lịch',
  },
  {
    value: '6',
    label: 'Nghề nghiệp',
  },
  {
    value: '7',
    label: 'Thể thao',
  },
  {
    value: '8',
    label: 'Cảm xúc',
  },
  {
    value: '9',
    label: 'Nghệ thuật',
  },
];

export const WORD_SPECIALTY = [
  {
    value: '0',
    label: 'Không',
  },
  {
    value: '1',
    label: 'Công nghệ sinh học (Biotechnology)',
  },
  {
    value: '2',
    label: 'Kế toán (Accounting)',
  },
  {
    value: '3',
    label: 'Kinh tế học (Economics)',
  },
  {
    value: '4',
    label: 'Thương mại quốc tế (International Trade)',
  },
  {
    value: '5',
    label: 'Quản trị nhân lực (Human Resource Management)',
  },
  {
    value: '6',
    label: 'Công nghệ thông tin (Information Technology)',
  },
];
