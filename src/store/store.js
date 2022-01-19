import { createStore, combineReducers } from "redux";
import { reducer, hoverReducer } from "./reducer";

export const store = createStore(
  combineReducers({
    page: reducer,
    hovered: hoverReducer,
  })
);
