import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './slices/greetingsSlice';

const store = configureStore({
  reducer: {
    message: greetingReducer,
  },
});

export default store;
