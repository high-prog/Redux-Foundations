//For Asynchronous actions
const redux = require('redux');
const applyMidleware = redux.applyMiddleware;
//To create async action creators
const thunkMiddleware = require('redux-thunk').default;
//TO make calls to an api endpoint
const axios = require('axios');

//TO

//initial state
const initialState = {
  loading: false,
  users: [],
  error: '',
};

//Actions
const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const userRequested = (payload) => {
  return {
    type: FETCH_USER_REQUESTED,
    payload: payload,
  };
};
const userSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const userFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//REducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_USER_FAILURE:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//is an action creater(which ususally returns object) but due to thunk it can now return functions
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(userRequested());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        //reponse.data  = users
        const users = response.data.map((user) => user.id);
        dispatch(userSuccess(users));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(userFailure(err.message));
      });
  };
};

const store = redux.createStore(reducer, applyMidleware(thunkMiddleware));

const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState());
});

store.dispatch(fetchUsers());
