import simulation from "api/simulation";
import { GET_GAME_SIMULATION } from "actionTypes/gameSimulation";

export default ({ dispatch }) => next => async action => {
  if (!action || action.type !== GET_GAME_SIMULATION) {
    return next(action);
  }

  dispatch({
    type: `${action.type}_REQUEST`,
  });

  const { size, selection = 1, changeSelection = false } = action;

  try {
    const data = await simulation(size, selection, changeSelection);
    return dispatch({
      type: `${action.type}_SUCCESS`,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: `${action.type}_ERROR`,
      payload: e,
    });
  }
};
