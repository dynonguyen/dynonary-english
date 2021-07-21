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

  getSearchWord: (word = '', isCompact = false) => {
    return axiosClient.get(`${URL}/search-word`, {
      params: { word, isCompact },
    });
  },

  getWordDetails: (word = '') => {
    return axiosClient.get(`${URL}/word-details`, { params: { word } });
  },

  getUserFavoriteList: (page = 0, perPage = 20, sortType = 'rand') => {
    return axiosClient.get(`${URL}/favorite-list`, {
      params: { page, perPage, sortType },
    });
  },
};

export default wordApi;
