import axiosClient from './axiosClient';

const URL = '/sentence';

const sentenceApi = {
  postContributeSentence: (sentence, mean, note) => {
    return axiosClient.post(`${URL}/contribute/add-sentence`, {
      sentence,
      mean,
      note,
    });
  },
};

export default sentenceApi;
