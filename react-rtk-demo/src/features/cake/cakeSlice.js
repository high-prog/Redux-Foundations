//adding slice is a redux convention
//it is recommended to store actions and reducers for one feature 'cake' in a single file with name slice.

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfcakes:10,
}


//create slice will automatically create actions with the same name as reducers defined
const cakeSlice = createSlice({
  //takes an object specify the following properties
  name: 'cake',
  initialState,
  //reducer function defined below and actions will be generated with the same name
  reducers: {
    ordered: (state) => {
      //with redux toolkit not necesary to return a new state you can modify old state
      state.numOfcakes--
    },
    restocked: (state, actions) => {
      state.numOfcakes += actions.payload
    },
  },
})


module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions