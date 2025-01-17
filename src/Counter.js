import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count); // Access the count from Redux state
  const dispatch = useDispatch(); // Dispatch actions to the store

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;
