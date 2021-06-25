import axiosClient from './axiosClient';

const URL = '/flashcard';

const flashcardApi = {
  getWordPack: (page = 1, perPage = 8, packInfo) => {
    return axiosClient.get(`${URL}/word-pack`, {
      params: { page, perPage, packInfo: JSON.stringify(packInfo) },
    });
  },
};

export default flashcardApi;
