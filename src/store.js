import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import gameDataGenerator from "middleware/gameDataGenerator";
import gameSimulation from "middleware/gameSimulation";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = applyMiddleware(thunk, gameDataGenerator, gameSimulation);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
