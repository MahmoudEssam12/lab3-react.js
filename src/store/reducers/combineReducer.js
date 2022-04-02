import { combineReducers } from "redux";
import { favouritReducer } from "./favourit";
import { paginationReducer } from "./pagination";

export default combineReducers({
    favourite: favouritReducer,
    pagination: paginationReducer
});