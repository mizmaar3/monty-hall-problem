import { combineReducers } from "redux";
import format from "./format";
import gameData from "./gameData";
import gameSimulation from "./gameSimulation";

const rootReducer = combineReducers({
  format,
  gameData,
  gameSimulation,
});

export default rootReducer;
