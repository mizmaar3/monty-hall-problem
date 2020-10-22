import {
  GET_GAME_SIMULATION_INITIAL,
  GET_GAME_SIMULATION_REQUEST,
  GET_GAME_SIMULATION_SUCCESS,
  GET_GAME_SIMULATION_ERROR,
} from "actionTypes/gameSimulation";

const initialState = {
  isFetching: false,
  errors: [],
  items: { size: 0, cars: 0, goats: 0, changeSelection: false, selection: 1 },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_GAME_SIMULATION_INITIAL: {
      return { ...initialState, isFetching: true, errors: [] };
    }

    case GET_GAME_SIMULATION_REQUEST: {
      return { ...state, isFetching: true, errors: [] };
    }

    case GET_GAME_SIMULATION_SUCCESS: {
      const items = action.payload;
      return {
        ...state,
        items,
        isFetching: false,
        errors: [],
      };
    }

    case GET_GAME_SIMULATION_ERROR: {
      return {
        ...state,
        isFetching: false,
        items: action.data || state.items,
        errors: [action.payload],
      };
    }

    default:
      return state;
  }
};
