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
};

export default sentenceApi;
