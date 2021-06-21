import axiosClient from './axiosClient';

const URL = '/word';

const wordApi = {
  postContributeWord: (wordInfor) => {
    return axiosClient.post(`${URL}/contribute/add-word`, { ...wordInfor });
  },
};

export default wordApi;
