import axiosClient from './axiosClient';

const URL = '/word';

export default wordApi = {
  postContributeWord: (wordInfor) => {
    return axiosClient.post(`${URL}/contribute/add-word`, { ...wordInfor });
  },
};
