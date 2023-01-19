const redux = require('redux');
const produce = require('immer').produce;

//Now when using complex objects it gets harder to track part of state we are changing so to ease that we use immer
//immer makes it easier to update state in complex state as now we can update the state directly

const initial = {
  name: 'Vishwsa',
  address: {
    street: '123 main st',
    city: 'Delhi',
    state: 'UK',
  },
};

//ACtion
const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const streetReducer = (state = initial, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // }; DO the below for using immer
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default: {
      return state;
    }
  }
};

const store = redux.createStore(streetReducer);
console.log('initial ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updates state', store.getState());
});

store.dispatch(updateStreet('vijay colony'));
