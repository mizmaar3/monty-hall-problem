import {
  GET_GAME_SIMULATION,
  GET_GAME_SIMULATION_INITIAL,
} from "actionTypes/gameSimulation";

export const gameSimulation = (
  size = 1,
  selection = 0,
  changeSelection = true
) => dispatch =>
  dispatch({
    type: GET_GAME_SIMULATION,
    size,
    selection,
    changeSelection,
  });

export const resetToInitial = () => ({
  type: GET_GAME_SIMULATION_INITIAL,
});
