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

  getTotalSentences: (topic = '-1') => {
    return axiosClient.get(`${URL}/total`);
  },

  getSentenceList: (page = 1, perPage = 20) => {
    return axiosClient.get(`${URL}/list`);
  },
};

export default sentenceApi;
