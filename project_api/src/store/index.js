import { combineReducers } from "redux";
import page1Reducer from "./page1/reducer";
import page2Reducer from "./page2/reducer";

const rootReducer = combineReducers({
  page1: page1Reducer,
  page2: page2Reducer
});

export default rootReducer;
