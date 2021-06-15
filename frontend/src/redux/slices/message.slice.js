import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    open: false,
    duration: 2000,
    message: 'This is a message',
    variant: 'filled',
    type: 'success',
  },
  reducers: {
    setMessage(state, action) {
      const { payload } = action;

      if (typeof payload === 'string') {
        return { ...state, open: true, message: payload };
      }

      return { ...state, open: true, ...payload };
    },
    closeMessage(state) {
      state.open = false;
    },
  },
});

const { reducer, actions } = messageSlice;
export const { setMessage, closeMessage } = actions;
export default reducer;
