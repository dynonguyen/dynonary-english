import axiosClient from './axiosClient';

const URL = '/games';

const gameApi = {
  // correct word game
  getWordPackCWG: (packInfo) => {
    return axiosClient.get(`${URL}/correct-word/pack`, { params: packInfo });
  },
};

export default gameApi;
