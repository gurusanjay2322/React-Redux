import { createStore } from "redux";
import counterReducer from "./counterReducer";
export const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log('State updated',store.getState().count);
})