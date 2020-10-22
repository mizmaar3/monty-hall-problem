import gameSimulationReducer from "reducers/gameSimulation";
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

describe("gameSimulationReducer", () => {
  it("should return initial state if no action type", () => {
    const result = gameSimulationReducer();
    expect(result).toEqual(initialState);
  });

  it("should hav isFetching true if action type = GET_GAME_SIMULATION_INITIAL", () => {
    const result = gameSimulationReducer(null, {
      type: GET_GAME_SIMULATION_INITIAL,
    });
    expect(result.isFetching).toBe(true);
  });

  it("should set isFetching true and clear errors when GET_GAME_SIMULATION_REQUEST is action type", () => {
    const result = gameSimulationReducer(
      {
        ...initialState,
        errors: ["some error1"],
      },
      {
        type: GET_GAME_SIMULATION_REQUEST,
      }
    );
    expect(result.isFetching).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  it("should set isFetching false on GET_GAME_SIMULATION_SUCCESS is action type", () => {
    const result = gameSimulationReducer(null, {
      type: GET_GAME_SIMULATION_SUCCESS,
      payload: { data: "some data" },
    });
    expect(result.isFetching).toBe(false);
    expect(result.items).toEqual({ data: "some data" });
  });

  it("should set errors GET_GAME_SIMULATION_ERROR is action type", () => {
    const result = gameSimulationReducer(initialState, {
      type: GET_GAME_SIMULATION_ERROR,
      payload: { error: "some error" },
    });
    expect(result.isFetching).toBe(false);
    expect(result.errors[0]).toEqual({ error: "some error" });
  });
});
