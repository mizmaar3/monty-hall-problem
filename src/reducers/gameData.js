import {
  GET_GAME_DATA_REQUEST,
  GET_GAME_DATA_SUCCESS,
  GET_GAME_DATA_ERROR,
} from "actionTypes/gameData";

const initialState = {
  isFetching: false,
  errors: [],
  items: { data: [], changeSelection: false },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_GAME_DATA_REQUEST: {
      return { ...state, isFetching: true, errors: [] };
    }

    case GET_GAME_DATA_SUCCESS: {
      const items = action.payload;
      return {
        ...state,
        items,
        isFetching: false,
        errors: [],
      };
    }

    case GET_GAME_DATA_ERROR: {
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
