import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accountApi from 'apis/accountApi';

export const getUserInfo = createAsyncThunk(
  'userInfo/getUserInfo',
  async (params, thunkAPI) => {
    try {
      const apiRes = await accountApi.getUserInfo();
      if (apiRes && apiRes.status === 200) {
        return apiRes.data.user;
      }
      return {};
    } catch (error) {
      throw error;
    }
  },
);

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    isAuth: false,
    name: '',
    username: '',
    avt: '',
    favoriteList: [],
  },
  reducers: {
    setAddFavorites(state, action) {
      const { word, isAdd = true } = action.payload;

      if (isAdd) {
        state.favoriteList.push(word);
      } else {
        state.favoriteList = state.favoriteList.filter((i) => i !== word);
      }
    },
  },
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      const { username, name, avt, favoriteList } = action.payload;
      if (!username || username === '') {
        state.isAuth = false;
        return;
      }
      return { isAuth: true, username, name, avt, favoriteList };
    },
  },
});

const { reducer, actions } = userInfoSlice;
export const { setAddFavorites } = actions;
export default reducer;
