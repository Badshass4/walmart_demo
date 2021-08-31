import { combineReducers } from "redux";

import itemReducer from "../containers/Item/ducks/reducer";
const rootReducer = combineReducers({
  itemReducer,
});

export default rootReducer;
