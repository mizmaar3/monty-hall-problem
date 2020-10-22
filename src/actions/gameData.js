import { GET_GAME_DATA } from "actionTypes/gameData";

export const getGameData = (size = 1) => dispatch =>
  dispatch({
    type: GET_GAME_DATA,
    size,
  });
