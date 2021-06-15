import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/message.slice';

const store = configureStore({
  reducer: { message: messageReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
