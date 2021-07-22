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

  postLogout: () => {
    return axiosClient.post(`${URL}/logout`);
  },

  putToggleWordFavorite: (username, word, isAdd) => {
    return axiosClient.put(`${URL}/toggle-favorite`, { username, word, isAdd });
  },

  putUpdateUserCoin: (newCoin) => {
    return axiosClient.put(`${URL}/update-coin`, { newCoin });
  },

  getUserInfo: () => {
    return axiosClient.get(`${URL}/user-info`);
  },
};

export default accountApi;
