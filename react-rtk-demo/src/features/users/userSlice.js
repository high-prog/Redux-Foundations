//Async api call in redux toolkit

import { createSlice } from '@reduxjs/toolkit';

//redux toolkit provides with Async thunk to handle async functoins
import { createAsyncThunk } from '@reduxjs/toolkit';

//To make the api call
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

//Create asyncThunk function recieves action type and callback for the api call or async work
//Automatically dispatches based on the returned promise
//generated pending , fulfilled, rejected action types so add extra reducers to slice as these are not created by slice
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;

