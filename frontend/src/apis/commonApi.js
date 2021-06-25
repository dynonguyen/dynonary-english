import axiosClient from './axiosClient';

const URL = '/common';

const commonApi = {
  getWordPackTotal: (packInfo) => {
    return axiosClient.get(`${URL}/word-pack/total`, {
      params: { packInfo: JSON.stringify(packInfo) },
    });
  },
};

export default commonApi;
