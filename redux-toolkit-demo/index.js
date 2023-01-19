//Creating a cake and icecream store like in normal redux was done but here with toolkit
//The folder setup is a convention and can be used
//The app folder contains the store and the feature will be stored in its own folder but in different files for  cake and icecream

const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require("./features/users/userSlice").fetchUsers;



console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state', store.getState());
});


store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(3))
// unsubscribe();
