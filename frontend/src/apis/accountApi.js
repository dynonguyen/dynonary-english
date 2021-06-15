import axiosClient from './axiosClient';

const URL = '/account';

const accountApi = {
  postRegisterAccount: (email, name, password) => {
    return axiosClient.post(`${URL}/register`, { email, name, password });
  },
};

export default accountApi;
