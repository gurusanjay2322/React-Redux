# 📘 React + Redux Counter App (Vanilla Redux)

This project is a simple **React + Redux** counter app using the **older version of Redux** (without Redux Toolkit). It demonstrates key concepts like:

* Creating a Redux store
* Subscribing to the store using `store.subscribe()`
* Dispatching actions
* Updating UI when the state changes

## 📁 Folder Structure

```
src/
├── App.js            # Main component
├── index.js          # Entry point
├── store.js          # Redux store and reducer setup
├── counterReducer.js # Reducer function
└── Counter.js        # UI component with state updates
```

---

## 🔄 How It Works

### 1. **Redux Store** (`store.js`)

```js
import { createStore } from 'redux';
import counterReducer from './counterReducer';

export const store = createStore(counterReducer);
```

* Uses `createStore()` to initialize the store with `counterReducer`
* Holds a global state: `{ count: 0 }`

### 2. **Reducer Function** (`counterReducer.js`)

```js
const initialState = { count: 0 };

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    default: return state;
  }
}
```

* Handles state transitions based on action types
* Ensures immutability and predictable state updates

### 3. **Component** (`Counter.js`)

```js
const [count, setCount] = useState(store.getState().count);

useEffect(() => {
  const unsubscribe = store.subscribe(() => {
    setCount(store.getState().count);
  });
  return unsubscribe;
}, []);
```

* Initializes `count` from the Redux store
* Subscribes to store changes with `store.subscribe()`
* Updates local UI using `setCount()` whenever the global state changes

### 4. **Dispatching Actions**

```js
<button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
<button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
```

* Buttons trigger `INCREMENT` and `DECREMENT` actions
* These actions are handled by the reducer
* Resulting state change updates the UI via the subscription

---
### ✅ Redux Store Creation

* Use `createStore(reducer)` to create a store
* Stores the application state

### ✅ Subscribing to Store

* Use `store.subscribe(callback)`
* Useful to run logic (or UI update) on state change
* Return an `unsubscribe()` function to avoid memory leaks

### ✅ Dispatching Actions

* Send an action to the reducer using `store.dispatch({ type: 'ACTION_TYPE' })`
* The reducer updates the state based on the action

### ✅ Component Re-render

* Components re-render when `useState()` is updated by the Redux subscription

---
