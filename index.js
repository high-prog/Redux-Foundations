// run `node index.js` in the terminal
const redux = require('redux');
const createStore = redux.createStore;
//To bind the action creators
const bindActionCreators = redux.bindActionCreators;
//To combine all reducers
const combineReducer = redux.combineReducers;
//to apply middleware to redux --> send applymiddleware as a function to createStore(See below)
const applyMiddleware = redux.applyMiddleware;

//A middleware to log
const logger = require('redux-logger').createLogger();

//Action --> what to do
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTORED = 'CAKE_RESTORED';
const ICECREAMS_ORDERED = 'ICECREAMS_ORDERED';
const ICECREAMS_RESTORED = 'ICECREAMS_RESTORED';

//Action creator --> a function which returns the type of action

//Cake action creators
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restoreCake(qty = 1) {
  return {
    type: 'CAKE_RESTORED',
    //qty is passed when we dispatch the action.
    payload: qty,
  };
}

// Icecream action creaters
function orderICECREAMS(qty = 1) {
  return {
    type: ICECREAMS_ORDERED,
    payload: qty,
  };
}

function restoreICECREAMS(qty = 1) {
  return {
    type: 'ICECREAMS_RESTORED',
    //qty is passed when we dispatch the action.
    payload: qty,
  };
}

//Initial state --> Make different for each state and multiplereducers
// const initialState = {
//   numOfCakes: 10,
//   noOfIceCreams: 10,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 10,
};

//Reducer --> takes state and action and perform  necessary changes to state and returns new state
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTORED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAMS_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      };
    case ICECREAMS_RESTORED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

//Combining the reducers
const rootReducers = combineReducer({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// Redux store--> holds app state, allows access to state, allow update to state using dispatch(actionCreator) , Register listeners via subscribe
//code starts here
const store = createStore(rootReducers, applyMiddleware(logger));
console.log('initial state', store.getState());

//listener for the store --> anytime state updates it logs to console
const unsubscribe = store.subscribe(() => {
  // console.log('updated state', store.getState()); to be used without logger middleware
});

// Without binding action creators
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoreCake(3));

const actions = bindActionCreators(
  { orderCake, restoreCake, orderICECREAMS, restoreICECREAMS },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restoreCake(3);

actions.orderICECREAMS();
actions.orderICECREAMS();
actions.restoreICECREAMS(2);
unsubscribe();

//This will not work cause we unsubscribed from the store in the above line
