//For Asynchronous actions
const redux = require('redux')
const applyMidleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").thunkMiddleware;


//initial state
const initialState = {
  loading: false,
  users : [],
  error: '',
}

//Actions
const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

const userRequested = (payload) => {
  return{
    type: FETCH_USER_REQUESTED,
    payload: payload
  }
}
const userSuccess = (payload) => {
  return{
    type: FETCH_USER_SUCCESS,
    payload: payload
  }
}
const userFailure = (payload) => {
  return{
    type: FETCH_USER_FAILURE,
    payload: payload
  }
}



//REducer
const reducer = (state = initialState, action){
  switch(action.type){
    case  FETCH_USER_REQUESTED:
      return null;
    case  FETCH_USER_SUCCESS:
      return null;
    case  FETCH_USER_FAILURE:
      return null;
    default:
      return state;
  }
}


const store = redux.createStore(reducer);

const unsubscribe = store.subscribe( () => {});