//get createSlice function
const createSlice = require('@reduxjs/toolkit').createSlice;

//initialState
const initialState = {
  numoficecreams: 10,
};

//create the slice
const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numoficecreams--;
    },
    restocked: (state, action) => {
      state.numoficecream += action.payload;
    },
    //Extra reducers are used to change the state from another reducer of another feature
    extraReducers: {
      ['cake/ordered']: (state, action) => {
        state.numoficecreams--;
      },
    },
  },
});

//export the slice and actions
module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
