import { useState, useEffect } from 'react';
import { store } from '../store';
function Counter() {
  // Local state to keep track of the count (synced with Redux store)
  const [count, setCount] = useState(store.getState().count);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Subscribe to the Redux store
    // This function will be called every time the store state changes
    const unSubscribe = store.subscribe(() => {
      // Update local state with the latest count from Redux store
      setCount(store.getState().count);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return unSubscribe;
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      {/* Display the current count */}
      <h2>Count : {count}</h2>

      {/* Dispatch INCREMENT action to the Redux store */}
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
        Increment +
      </button>

      {/* Dispatch DECREMENT action to the Redux store */}
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
        Decrement -
      </button>
    </div>
  );
}
export default Counter;
