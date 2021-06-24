import axiosClient from './axiosClient';

const URL = '/games';

const gameApi = {
  // correct word game
  getWordPackCWG: (
    type = '-1',
    level = '-1',
    specialty = '-1',
    topic = '-1',
  ) => {
    return axiosClient.get(`${URL}/correct-word/pack`, {
      params: { type, level, specialty, topic },
    });
  },
};

export default gameApi;
