//get createSlice function
const createSlice = require('@reduxjs/toolkit').createSlice;

//initialState
const initial = {
  numoficecreams: 10
}

//create the slice
const icecreamSlice = createSlice({
  name: 'icecream',
  initial,
  reducers : {
    ordered : (state, action) => {
      state.numoficecreams--;
    },
    restocked : (state, action) => {
      state.numoficecream += action.payload
    },
  }
})


//export the slice and actions
module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions;