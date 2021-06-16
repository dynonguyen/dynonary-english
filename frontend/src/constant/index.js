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
};

export const REGEX = {
  NAME: /^[^\d~`!@#$%^&*\(\)\\\|\.,\?\/\-\+\=\_]+$/gi,
};

export const UX = {
  DELAY_TIME: 1500,
};

export const THEME_KEYS = {
  ROOT_KEY: 'data-theme',
  LS_KEY: 'theme',
  LIGHT: 'light',
  DARK: 'dark',
};

export default {
  ROUTES,
  THEME_KEYS,
  MAX,
  MIN,
  REGEX,
};
