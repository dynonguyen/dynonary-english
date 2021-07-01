import axiosClient from './axiosClient';

const URL = '/word';

const wordApi = {
  postContributeWord: (wordInfor) => {
    return axiosClient.post(`${URL}/contribute/add-word`, { ...wordInfor });
  },

  getCheckWordExistence: (word, type) => {
    return axiosClient.get(`${URL}/exist`, { params: { word, type } });
  },

  // get word, type, phonetic, mean
  getWordList: (page = 1, perPage = 8, packInfo, sortType = 'rand') => {
    return axiosClient.get(`${URL}/pack`, {
      params: { page, perPage, packInfo: JSON.stringify(packInfo), sortType },
    });
  },
};

export default wordApi;
