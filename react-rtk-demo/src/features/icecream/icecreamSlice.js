//get createSlice function
import { createSlice } from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'


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
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered , (state) => {
          state.numofIcecreams--;
        })
    },
  },
});

//export the slice and actions
export default icecreamSlice.reducer;
export default {ordered, restocked } = icecreamSlice.actions;
