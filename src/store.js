import { createStore } from 'redux';

// Define an initial state
const initialState = {
  count: 0
};

// Create a reducer function that returns the next state based on the action
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// Create a Redux store that holds the state of the app
const store = createStore(counterReducer);

export default store;
