import data from "api/data";
import { GET_GAME_DATA } from "actionTypes/gameData";

export default ({ dispatch }) => next => async action => {
  if (!action || action.type !== GET_GAME_DATA) {
    return next(action);
  }

  dispatch({
    type: `${action.type}_REQUEST`,
  });

  const { size } = action;

  try {
    const gameData = await data(size);
    return dispatch({
      type: `${action.type}_SUCCESS`,
      payload: { data: gameData },
    });
  } catch (e) {
    return dispatch({
      type: `${action.type}_ERROR`,
      payload: e,
    });
  }
};
