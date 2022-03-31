import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { favouritReducer } from "./reducers/favourit";

const store = createStore(favouritReducer, composeWithDevTools())

export default store;