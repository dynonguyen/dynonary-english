import axiosClient from './axiosClient';

const URL = '/account';

const accountApi = {
  postRegisterAccount: (email, name, password) => {
    return axiosClient.post(`${URL}/register`, { email, name, password });
  },

  postLogin: (email, password) => {
    return axiosClient.post(`${URL}/login`, { email, password });
  },

  postLoginWithGoogle: (access_token) => {
    return axiosClient.post(`${URL}/login-gg`, { access_token });
  },

  postLoginWithFacebook: (access_token) => {
    return axiosClient.post(`${URL}/login-fb`, { access_token });
  },

  postLogout: () => {
    return axiosClient.post(`${URL}/logout`);
  },

  postResetPassword: (email, password, verifyCode) => {
    return axiosClient.post(`${URL}/reset-password`, {
      email,
      password,
      verifyCode,
    });
  },

  putToggleWordFavorite: (username, word, isAdd) => {
    return axiosClient.put(`${URL}/toggle-favorite`, { username, word, isAdd });
  },

  putUpdateUserCoin: (newCoin) => {
    return axiosClient.put(`${URL}/update-coin`, { newCoin });
  },

  putUpdateAvt: (avtSrc = '') => {
    return axiosClient.put(`${URL}/update-avt`, { avtSrc });
  },

  putUpdateProfile: (name = '', username = '') => {
    return axiosClient.put(`${URL}/update-profile`, { name, username });
  },

  getUserInfo: () => {
    return axiosClient.get(`${URL}/user-info`);
  },

  getSendVerifyCode: (email) => {
    return axiosClient.get(`${URL}/send-verify-code`, {
      params: { email },
    });
  },

  getUserProfile: () => {
    return axiosClient.get(`${URL}/user-profile`);
  },
};

export default accountApi;
