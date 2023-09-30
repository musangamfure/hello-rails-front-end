import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from '../thunk';

const initialState = {
  greeting: '',
  isLoading: true,
  error: false,
  errMsg: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = false; // Reset the error flag on pending
        state.errMsg = ''; // Reset the error message on pending
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload.message;
        state.isLoading = false;
        state.error = false; // Reset the error flag on fulfillment
        state.errMsg = ''; // Reset the error message on fulfillment
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload.error; // Access the error message from the payload
      });
  },
});

export default greetingSlice.reducer;
