import axiosClient from './axiosClient';

const URL = '/account';

const accountApi = {
  postRegisterAccount: (email, name, password) => {
    return axiosClient.post(`${URL}/register`, { email, name, password });
  },

  postLogin: (email, password) => {
    return axiosClient.post(`${URL}/login`, { email, password });
  },

  postLogout: () => {
    return axiosClient.post(`${URL}/logout`);
  },

  getUserInfo: () => {
    return axiosClient.get(`${URL}/user-info`);
  },
};

export default accountApi;
