import combineReducers from "react-combine-reducers";
import { mapReducer, mapState } from "./map";

export const [mainReducer, mainState] = combineReducers({
  map: [mapReducer, mapState],
});
