import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/greetings/random';

const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

export default fetchGreeting;
