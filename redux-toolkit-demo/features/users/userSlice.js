//Async api call in redux toolkit

const createSlice = require('@reduxjs/toolkit').createSlice;

//redux toolkit provides with Async thunk to handle async functoins
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

//To make the api call
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: '',
};

//Create asyncThunk function
//Automatically dispatches based on the returned promise
//generated pending , fulfilled, rejected action types so add extra reducers to slice as these are not created by slice
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
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

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
