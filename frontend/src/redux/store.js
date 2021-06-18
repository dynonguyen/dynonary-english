import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/message.slice';
import userInfoReducer from './slices/userInfo.slice';
import voiceReducer from './slices/voice.slice';

const store = configureStore({
  reducer: {
    message: messageReducer,
    userInfo: userInfoReducer,
    voice: voiceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
