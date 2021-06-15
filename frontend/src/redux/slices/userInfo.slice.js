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
  },
  reducers: {},
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      const { username, name, avt } = action.payload;
      if (!username || username === '') {
        state.isAuth = false;
        return;
      }
      return { isAuth: true, username, name, avt };
    },
  },
});

const { reducer, actions } = userInfoSlice;

export default reducer;
