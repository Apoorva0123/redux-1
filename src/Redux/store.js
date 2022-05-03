import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducer";

const store = createStore(counterReducer, {counter: 0, todos: []})

// store.subscribe(() => {
//     console.log("Subscribe:", store.getState())
// })

export default store 