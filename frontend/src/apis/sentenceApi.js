import axiosClient from './axiosClient';

const URL = '/sentence';

const sentenceApi = {
  postContributeSentence: (sentence, mean, note, topics) => {
    return axiosClient.post(`${URL}/contribute/add-sentence`, {
      sentence,
      mean,
      note,
      topics,
    });
  },

  getTotalSentences: (topics = []) => {
    return axiosClient.get(`${URL}/total`, {
      params: { topics: JSON.stringify(topics) },
    });
  },

  getSentenceList: (page = 1, perPage = 20, topics = []) => {
    return axiosClient.get(`${URL}/list`, {
      params: {
        page,
        perPage,
        topics: JSON.stringify(topics),
      },
    });
  },
};

export default sentenceApi;
