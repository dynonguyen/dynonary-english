import axiosClient from './axiosClient';

const URL = '/games';

const gameApi = {
  // correct word game
  getWordPackCWG: (
    type = '-1',
    level = '-1',
    specialty = '-1',
    topics = [],
    nQuestion = 50,
  ) => {
    return axiosClient.get(`${URL}/correct-word/pack`, {
      params: {
        type,
        level,
        specialty,
        topics: JSON.stringify(topics),
        nQuestion,
      },
    });
  },

  // word match game
  getWordPackWordMatch: (
    type = '-1',
    level = '-1',
    specialty = '-1',
    topics = [],
    nQuestion = 50,
  ) => {
    return axiosClient.get(`${URL}/word-match/pack`, {
      params: {
        type,
        level,
        specialty,
        topics: JSON.stringify(topics),
        nQuestion,
      },
    });
  },

  // fast game
  getWordPackFG: (topic = 0) => {
    return axiosClient.get(`${URL}/fast-game/pack`, {
      params: { topic },
    });
  },
};

export default gameApi;
