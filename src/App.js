import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import the Redux store
import Counter from './Counter'; // We'll create this component next

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
