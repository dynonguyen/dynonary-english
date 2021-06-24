import axiosClient from './axiosClient';

const URL = '/games';

const gameApi = {
  // correct word game
  getWordPackCWG: (
    type = '-1',
    level = '-1',
    specialty = '-1',
    topics = [],
  ) => {
    return axiosClient.get(`${URL}/correct-word/pack`, {
      params: { type, level, specialty, topics: JSON.stringify(topics) },
    });
  },
};

export default gameApi;
