import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants/apiConfig';

export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async () => {
    const response = await fetch(`${BASE_URL}`, { method: 'GET'});
    return response.json();
  }
)

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchJobs.fulfilled]: (state, action) => {
      state.loading = false;
      // Add jobs to the state array
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchJobs.rejected]: (state, action) => {
      state.loading = false;
    },
  }
});

export default jobsSlice.reducer;