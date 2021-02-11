import combineReducers from "react-combine-reducers";
import { homesReducer, homesState } from "./homes";
import { mapReducer, mapState } from "./map";

export const [mainReducer, mainState] = combineReducers({
  map: [mapReducer, mapState],
  homesList: [homesReducer, homesState],
});
