import axiosClient from './axiosClient';

const URL = '/word';

const wordApi = {
  postContributeWord: (wordInfor) => {
    return axiosClient.post(`${URL}/contribute/add-word`, { ...wordInfor });
  },

  getCheckWordExistence: (word, type) => {
    return axiosClient.get(`${URL}/exist`, { params: { word, type } });
  },

  getWordPackByPage: (page = 1, perPage = 8, wordInfo) => {
    return axiosClient.get(`${URL}/word-pack-by-page`, {
      params: { page, perPage, wordInfo },
    });
  },
};

export default wordApi;
