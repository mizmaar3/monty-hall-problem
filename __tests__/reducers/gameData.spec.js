import gameDataReducer from "reducers/gameData";
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

describe("gameDataReducer", () => {
  it("should return initial state if no action type", () => {
    const result = gameDataReducer();
    expect(result).toEqual(initialState);
  });

  it("should set isFetching true and clear errors when GET_GAME_DATA_REQUEST is action type", () => {
    const result = gameDataReducer(
      {
        ...initialState,
        errors: ["some error"],
      },
      {
        type: GET_GAME_DATA_REQUEST,
      }
    );
    expect(result.isFetching).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  it("should set isFetching false on GET_GAME_DATA_SUCCESS is action type", () => {
    const result = gameDataReducer(null, {
      type: GET_GAME_DATA_SUCCESS,
      payload: { data: "some data" },
    });
    expect(result.isFetching).toBe(false);
    expect(result.items).toEqual({ data: "some data" });
  });

  it("should set errors GET_GAME_DATA_ERROR is action type", () => {
    const result = gameDataReducer(initialState, {
      type: GET_GAME_DATA_ERROR,
      payload: { error: "some error" },
    });
    expect(result.isFetching).toBe(false);
    expect(result.errors[0]).toEqual({ error: "some error" });
  });
});
