import { SET_FORMAT } from "actionTypes/format";

const initialState = "";

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FORMAT: {
      return action.payload.format;
    }

    default:
      return state;
  }
};
