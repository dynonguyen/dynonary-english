import axiosClient from './axiosClient';

const URL = '/highscore';

const highscoreApi = {
  putUpdateHighscore(name = '', score = 0) {
    return axiosClient.put(`${URL}/update`, { name, score });
  },
};

export default highscoreApi;
