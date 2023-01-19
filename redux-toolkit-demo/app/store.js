//Contains the code related to our redux store
const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userReducer = require('../features/users/userSlice');

//applying middleware logger
const reduxlogger = require('redux-logger');
const logger = reduxlogger.createLogger();

const thunk = require('redux-thunk');

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  //To add a middleware t0 the store
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

module.exports = store;
